import React, { useState } from 'react';
import { socket } from '../utils/socket';

const ChatBox = ({ messages, username }) => {
  const [text, setText] = useState('');

  const sendMessage = () => {
    if (!text.trim()) return;
    const msg = {
      sender: username,
      text,
      timestamp: new Date().toISOString(),
    };
    socket.emit('sendMessage', msg);
    setText('');
  };

  return (
    <div>
      <div style={{ height: '300px', overflowY: 'scroll', border: '1px solid #ddd' }}>
        {messages.map((msg, index) => (
          <p key={index}>
            <strong>{msg.sender}:</strong> {msg.text}
          </p>
        ))}
      </div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={() => socket.emit('typing')}
        placeholder="Type a message"
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default ChatBox;
