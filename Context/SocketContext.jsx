import React from 'react';
import io from "socket.io-client"; 

const url = import.meta.env.VITE_API_URL;
export const socket = io(url, { 
    reconnection: true,
    reconnectionDelay: 500,
    transports: ['websocket','polling'],  // Allow fallback to polling
    secure: true,  // For WSS connections
    rejectUnauthorized: false  // Only use this for testing, not in production
});

export const SocketContext = React.createContext();