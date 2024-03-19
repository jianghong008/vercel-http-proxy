import { VercelRequest, VercelResponse } from '@vercel/node';
import WebSocket from 'ws';
export default function handler(req, res) {
    const wss = new WebSocket.Server({ noServer: true });
  
    wss.on('connection', function connection(ws) {
      ws.on('message', function incoming(message) {
        console.log('received: %s', message);
        ws.send('hi,I am server');
      });
  
      ws.send('Hello, client!');
    });
  
    if (req.socket.server) {
      wss.handleUpgrade(req, req.socket, Buffer.alloc(0), (ws) => {
        wss.emit('connection', ws, req);
      });
    }
  }