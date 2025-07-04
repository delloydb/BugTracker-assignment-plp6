import React, { useState } from 'react';
import LoginPage from './pages/LoginPage';
import ChatRoomPage from './pages/ChatRoomPage';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  const [username, setUsername] = useState('');

  return (
    <ErrorBoundary>
      {!username ? (
        <LoginPage setUsername={setUsername} />
      ) : (
        <ChatRoomPage username={username} />
      )}
    </ErrorBoundary>
  );
}

export default App;
