# BugTracker-assignment-plp6
# 💬 Real-Time Chat App with Socket.io

This is a full-stack real-time chat application built with **Node.js**, **Express**, **Socket.io**, and **React**. It demonstrates bidirectional communication between client and server, including live messaging, typing indicators, and online status updates.

---

## 🚀 Project Overview

This project fulfills the Week 5 assignment requirements to:
- Implement real-time features using Socket.io
- Add core and advanced chat functionality
- Introduce intentional bugs and demonstrate debugging techniques
- Implement robust error handling and testing
## 🧪 Testing & Debugging Techniques
# ✅ Debugging Tools Used
Tool	Purpose
Console Logs	Track state and function calls
Chrome DevTools	Inspect API requests and React state
Node.js Inspector	Debug backend using --inspect
React Error Boundaries	Graceful component error handling

## 🔎 Intentional Bugs Introduced
Call to an undefined function: messages.notAFunction() in ChatRoomPage.js

Misspelled backend route: /api/cht in server.js

Missing variable: debuggingValue in chatController.js

## 🛠️ How to Debug
React Errors: Check the Console tab in Chrome DevTools.

Network/API Errors: Use Network tab in DevTools to inspect 404s/500s.

Backend Inspection:
node --inspect server/server.js
chrome://inspect
## ✅ Testing Strategy
Unit tests written for utility functions and components (not included here by default).

Integration tests planned for socket events and API routes.

Coverage tools like Jest or React Testing Library can be used to expand test scope.

## 🧯 Error Handling
Backend
Global error middleware in server/utils/errorHandler.js

Handles uncaught exceptions and returns a JSON error response

Frontend
Implemented ErrorBoundary in React to catch runtime crashes

Prevents full app crash from rendering bugs

## ✨ Features Implemented
 Global chat room

 Live messaging with timestamps

 Online/offline join notifications

 Typing indicator

 React error boundaries

 Express error middleware

 Console logs and DevTools-based debugging

 Intentional bugs for demonstration

## 🔗 Optional Deployment
You may deploy this project on:

Client: Vercel, Netlify

Server: Render, Railway, Heroku

Add deployed URLs here once available:

Client: https://your-client-url.com

Server: https://your-server-url.com

📂 Folder Structure
pgsql
Copy
Edit
.
├── server/

│   ├── controllers/

│   ├── models/

│   ├── routes/

│   ├── socket/

│   ├── utils/

│   ├── server.js

├── client/

│   ├── src/

│   │   ├── components/

│   │   ├── pages/

│   │   ├── utils/

│   │   ├── App.js

│   │   ├── index.js


---

## 🛠️ Setup Instructions

### 1 Clone the repository

```bash
git clone https://github.com/your-username/realtime-chat-app.git
cd realtime-chat-app

2. server setup
cd server
npm install
npm run dev

3.client setup
cd client
npm install
npm start

