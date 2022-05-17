import app from './index.js';
import queryString from 'query-string';
import WebSocket, { WebSocketServer } from 'ws';
import http from 'http';
//import fs from "fs"

const PORT = process.env.PORT || 5000;
//var app = function (req, res) { res.end('hello!') };

const server = http.createServer(app).listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});

const wss = new WebSocketServer({ server, path: '/live' });
wss.on('connection', (ws, req) => {
  const [_path, params] = req.url.split('?');
  const searchParams = queryString.parse(params);
  function loadBinanceTicker() {
    return new Promise((resolve, reject) => {
      let wss = new WebSocket(
        `wss://stream.binance.com:9443/stream?streams=${searchParams.symbol}@miniTicker`,
      );

      wss.onopen = function () {
        console.log('connected');
        resolve(wss);
      };

      wss.onerror = (event) => {
        console.log('Error from binance wss server' + event.message);
        setTimeout(() => {
          loadBinanceTicker();
        }, 5000);
        reject(event);
      };
      wss.onclose = (event) => {
        console.log('disconnected' + `${event.code}:${event.reason}`);
      };
    });
  }
  loadBinanceTicker()
    .then((wss) => {
      wss.onmessage = (event) => {
        let stockObject = event.data;
        ws.send(stockObject);
      };
      wss.onerror = (event) => {
        console.log('Error from binance ws server' + event.message);
      };
      wss.onclose = (event) => {
        console.log(`${event.code}:${event.reason}`);
      };
      //connection is up, let's add a simple simple event
      ws.on('message', (message) => {
        //log the received message and send it back to the client
        console.log('received: %s', message);
        ws.send(`Hello, you sent -> ${message}`);
      });
    })
    .catch((error) => console.log(error));
});
/* const options = {
  key: fs.readFileSync("key.pem"),
  cert: fs.readFileSync("cert.pem"),
} */
