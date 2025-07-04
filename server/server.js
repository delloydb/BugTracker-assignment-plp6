import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import dotenv from 'dotenv';
import { PORT, CLIENT_URL } from './config.js';
import chatRoutes from './routes/chatRoutes.js';
import { errorMiddleware } from './utils/errorHandler.js';
import socketConnection from './socket/index.js';

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: CLIENT_URL,
    methods: ['GET', 'POST'],
  },
});

app.use(cors());
app.use(express.json());

// Intentional bug: misspelled middleware
app.use('/api/chat', chatRoutes);
app.use('/api/cht', (req, res) => res.send('Broken route')); // intentional

// Intentional debug log
console.log('[DEBUG] Server initialized');

// Socket.io
socketConnection(io);

// Error middleware
app.use(errorMiddleware);

// Start server
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
