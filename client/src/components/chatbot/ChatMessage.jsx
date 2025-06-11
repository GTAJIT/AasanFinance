import React from 'react';
import PropTypes from 'prop-types';
// import './ChatMessage.css';

const ChatMessage = ({ sender, message }) => {
  return (
    <div className={`chat-message ${sender === 'user' ? 'user-message' : 'bot-message'}`}>
      <strong>{sender}:</strong> {message}
    </div>
  );
};

ChatMessage.propTypes = {
  sender: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default ChatMessage;