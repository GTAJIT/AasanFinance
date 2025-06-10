from flask import Flask, render_template, request, jsonify
import requests
import json

app = Flask(__name__)

# IMPORTANT: As per Canvas instructions, leave the API key as an empty string.
# Canvas will automatically provide it at runtime.
# If you are running this locally outside of the Canvas platform and need to test,
# replace "" with your actual Google Cloud API Key that has access to Gemini API.
GEMINI_API_KEY = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=GEMINI_API_KEY"

# Gemini API endpoint for text generation
# We'll use 'gemini-1.5-flash' for a good balance of speed and capability.
GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent"

@app.route('/')
def home():
    # Renders the index.html template for the main page
    return render_template('index.html')

@app.route('/chat', methods=['POST'])
def chat():
    data = request.json
    user_message = data.get('message')

    if not user_message:
        return jsonify({'reply': 'Please type a message'}), 400

    try:
        # Define the system persona for the chatbot.
        # This instructs the Gemini model on how to behave.
        system_instruction_text = (
            "You are 'FinanceBot', an expert AI assistant specializing in financial education, "
            "government schemes in India, and tax-related queries. "
            "Provide clear, concise, and helpful information. "
            "Simplify complex financial topics and government schemes. "
            "Always maintain a helpful, encouraging, and educational tone. "
            "If a user asks for personal financial advice, explicitly state that you are an AI "
            "and cannot provide personalized advice, and instead recommend consulting "
            "a qualified financial advisor, tax professional, or the official government sources "
            "for their specific situation."
        )

        # Construct the payload for the Gemini API request
        payload = {
            "system_instruction": {
                "parts": [
                    {"text": system_instruction_text}
                ]
            },
            "contents": [
                {"role": "user", "parts": [{"text": user_message}]}
            ]
            # Optional: Add generation config for more control (e.g., creativity)
            # "generationConfig": {
            #     "temperature": 0.7, # Lower for less randomness, higher for more creative answers
            #     "maxOutputTokens": 800 # Limit response length
            # }
        }

        # Set headers for JSON content
        headers = {'Content-Type': 'application/json'}

        # If a GEMINI_API_KEY is provided (for local testing), append it to the URL.
        # For Canvas, the platform handles the API key injection automatically.
        api_url_to_use = f"{GEMINI_API_URL}?key={GEMINI_API_KEY}" if GEMINI_API_KEY else GEMINI_API_URL

        # Make the POST request to the Gemini API
        response = requests.post(api_url_to_use, headers=headers, data=json.dumps(payload))
        response.raise_for_status() # Raise an exception for HTTP errors (4xx or 5xx)

        # Parse the JSON response
        result = response.json()

        # Extract the AI's reply from the Gemini API response structure
        # We need to safely navigate through the JSON response
        if result.get('candidates') and len(result['candidates']) > 0 and \
           result['candidates'][0].get('content') and \
           result['candidates'][0]['content'].get('parts') and \
           len(result['candidates'][0]['content']['parts']) > 0:
            reply = result['candidates'][0]['content']['parts'][0]['text']
        else:
            # Fallback if the expected structure is not found
            reply = "Sorry, I couldn't get a valid response from the AI. The API response was empty or malformed."
            # Optionally log the full result for debugging purposes
            print(f"Unexpected API response structure: {result}") 

        return jsonify({'reply': reply})

    except requests.exceptions.RequestException as req_e:
        # Catches network errors (e.g., DNS issues, connection refused) or bad HTTP status codes
        print(f"Request Exception (HTTP/Network Error): {req_e}")
        return jsonify({'reply': f'Network or API error: {str(req_e)}. Please check your internet connection or try again.'}), 500
    except json.JSONDecodeError as json_e:
        # Catches errors if the response from the API is not valid JSON
        print(f"JSON Decode Error (API Response Not JSON): {json_e}")
        return jsonify({'reply': f'Error decoding AI response: {str(json_e)}. The AI might have sent an invalid response.'}), 500
    except Exception as e:
        # Catches any other unexpected Python errors during the process
        print(f"An unexpected Python error occurred: {e}")
        return jsonify({'reply': f'An unexpected internal error occurred: {str(e)}'}), 500

if __name__ == '__main__':
    # Run the Flask app in debug mode.
    # In a production environment, you would set debug=False and use a production-ready
    # WSGI server (like Gunicorn or uWSGI) instead of app.run().
    app.run(debug=True)