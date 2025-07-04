import React, { useEffect, useState } from 'react';
import { socket } from '../utils/socket';
import ChatBox from '../components/ChatBox';

const ChatRoomPage = ({ username }) => {
  const [messages, setMessages] = useState([]);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    socket.connect();
    socket.emit('join', username);

    socket.on('message', (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => socket.disconnect();
  }, [username]);

  // Intentional bug
  const fakeBug = messages.notAFunction(); // will throw

  return (
    <div>
      <h3>Welcome, {username}</h3>
      <ChatBox messages={messages} username={username} />
      {typing && <p>Someone is typing...</p>}
    </div>
  );
};

export default ChatRoomPage;
