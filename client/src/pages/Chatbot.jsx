import React, { useState, useRef, useEffect } from 'react';
// import styles from './Chatbot.module.css';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const chatMessagesRef = useRef(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  };

  const scrollToBottom = () => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  };

  const sendMessage = async () => {
    if (!inputValue.trim()) return;

    // Add user message
    const newMessages = [...messages, { type: 'user', content: inputValue }];
    setMessages(newMessages);
    setInputValue('');

    try {
      // Add loading message
      setMessages([...newMessages, { type: 'loading', content: 'Thinking...' }]);
      scrollToBottom();

      const response = await fetch('http://localhost:5000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: inputValue })
      });

      const data = await response.json();

      // Remove loading message and add bot response
      setMessages(prevMessages => 
        prevMessages
          .filter(msg => msg.type !== 'loading')
          .concat({
            type: response.ok ? 'bot' : 'error',
            content: response.ok ? data.reply : (data.reply || 'Something went wrong on the server.')
          })
      );

    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setMessages(prevMessages => 
        prevMessages
          .filter(msg => msg.type !== 'loading')
          .concat({
            type: 'error',
            content: 'Could not connect to the server. Please check your internet connection or try again later.'
          })
      );
    }

    scrollToBottom();
  };

  useEffect(() => {
    // Scroll to bottom on messages update
    scrollToBottom();
  }, [messages]);
  const styles = {
    chatbot: 'fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full cursor-pointer transition-transform transform hover:scale-110',
    chatbox: 'fixed bottom-10 w-fit m-5 max-h-fit bg-white shadow-lg rounded-t-2xl transition-transform transform',
    open: 'translate-y-0 w-xl',
    userMessage: 'bg-blue-100 p-2 rounded mb-2',
    botMessage: 'bg-green-100 p-2 rounded mb-2',
    loadingMessage: 'italic text-gray-500 mb-2',
    errorMessage: 'bg-red-100 p-2 rounded mb-2 text-red-700'
  };

  return (
    <>
      {/* <div className={styles.chatbot} onClick={toggleChat}>💬</div> */}

      <div className={`${styles.chatbox} ${isOpen ? styles.open : ''} flex flex-col w-2xl`}>
        <div className="flex justify-between items-center bg-blue-500 text-white p-4 text-lg font-semibold rounded-t-2xl">
          <strong>Ask FinanceBot 💬</strong>
          <button onClick={toggleChat} className="text-white text-xl font-bold ml-4 focus:outline-none">&times;</button>
        </div>
        
        <div ref={chatMessagesRef} className="flex-grow p-4 overflow-y-auto bg-gray-50">
          {messages.map((message, index) => (
            <div key={index} className={styles[`${message.type}Message`]}>
              <strong>{message.type === 'user' ? 'You' : 'Bot'}:</strong> {message.content}
            </div>
          ))}
        </div>

        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ask about taxes, savings..."
          className="w-full p-4 border-t border-gray-200 outline-none text-base rounded-b-2xl focus:ring-2 w-min-2xl focus:ring-blue-400"
        />
      </div>
    </>
  );
}
