from flask import Flask, render_template, request, jsonify
import requests
import json
import os
from dotenv import load_dotenv
import re
load_dotenv()
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

GEMINI_API_KEY = os.getenv('GEMINI_API_KEY')
GEMINI_API_URL = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key={GEMINI_API_KEY}"

def format_response(text):
    # Remove markdown formatting
    text = re.sub(r'\*\*(.*?)\*\*', r'\1', text)
    text = re.sub(r'\*(.*?)\*', r'\1', text)
    
    # Format section headings
    text = re.sub(r'^(\d+\..*?):', r'\n\1:\n', text, flags=re.MULTILINE)
    
    # Format lists with proper indentation
    text = re.sub(r'^\* (.+)$', r'  • \1', text, flags=re.MULTILINE)
    
    # Add spacing after periods, excluding numbered lists
    text = re.sub(r'\.(?! )(?!\d)', '. ', text)
    
    # Add extra line break before new sections
    text = re.sub(r'\n(\d+\.)', r'\n\n\1', text)
    
    # Clean up multiple spaces
    text = re.sub(r' +', ' ', text)
    
    # Add proper spacing between paragraphs
    text = re.sub(r'\n\s*\n', '\n\n', text)
    
    # Ensure consistent spacing after bullet points
    text = re.sub(r'•\s*', '• ', text)
    
    # Add extra spacing after sections
    text = re.sub(r'(:)\n', r'\1\n\n', text)
    
    # Format disclaimers with extra spacing
    text = re.sub(r'(Disclaimer:.*)', r'\n\n\1\n', text, flags=re.MULTILINE)
    
    # Ensure proper spacing around important notes
    text = re.sub(r'(Note:.*)', r'\n\1\n', text, flags=re.MULTILINE)
    
    # Clean up any remaining multiple newlines
    text = re.sub(r'\n{3,}', '\n\n', text)
    
    return text.strip()

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/chat', methods=['POST'])
def chat():
    data = request.json
    user_message = data.get('message')

    if not user_message:
        return jsonify({'reply': 'Please type a message'}), 400

    try:
        system_instruction_text = (
            "You are 'FinanceBot', an expert AI assistant specializing in financial education, "
            "government schemes in India, and tax-related queries. "
            "Provide clear, concise, and helpful information. "
            "Format your responses with proper spacing and bullet points using • instead of *. "
            "Use clear headings and proper paragraph breaks. "
            "Avoid using markdown formatting like ** or *. "
            "If a user asks for personal financial advice, explicitly state that you are an AI "
            "and cannot provide personalized advice, and instead recommend consulting "
            "a qualified financial advisor, tax professional, or the official government sources."
        )

        payload = {
            "system_instruction": {
                "parts": [
                    {"text": system_instruction_text}
                ]
            },
            "contents": [
                {"role": "user", "parts": [{"text": user_message}]}
            ]
        }

        headers = {'Content-Type': 'application/json'}
        api_url_to_use = GEMINI_API_URL

        response = requests.post(api_url_to_use, headers=headers, data=json.dumps(payload))
        response.raise_for_status()
        result = response.json()

        if result.get('candidates') and len(result['candidates']) > 0 and \
           result['candidates'][0].get('content') and \
           result['candidates'][0]['content'].get('parts') and \
           len(result['candidates'][0]['content']['parts']) > 0:
            reply = format_response(result['candidates'][0]['content']['parts'][0]['text'])
        else:
            reply = "Sorry, I couldn't get a valid response from the AI. The API response was empty or malformed."
            print(f"Unexpected API response structure: {result}") 

        return jsonify({'reply': reply})

    except requests.exceptions.RequestException as req_e:
        print(f"Request Exception (HTTP/Network Error): {req_e}")
        return jsonify({'reply': f'Network or API error: {str(req_e)}. Please check your internet connection or try again.'}), 500
    except json.JSONDecodeError as json_e:
        print(f"JSON Decode Error (API Response Not JSON): {json_e}")
        return jsonify({'reply': f'Error decoding AI response: {str(json_e)}. The AI might have sent an invalid response.'}), 500
    except Exception as e:
        print(f"An unexpected Python error occurred: {e}")
        return jsonify({'reply': f'An unexpected internal error occurred: {str(e)}'}), 500

if __name__ == '__main__':
    app.run(debug=True)