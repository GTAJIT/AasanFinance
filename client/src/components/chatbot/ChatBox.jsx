import React from 'react';
import ChatHeader from './ChatHeader';
import ChatHistory from './ChatHistory';
import ChatInput from './ChatInput';
// import './ChatBox.css';

const ChatBox = () => {
  return (
    <div className="chatbox">
      <ChatHeader />
      <ChatHistory />
      <ChatInput />
    </div>
  );
};

export default ChatBox;