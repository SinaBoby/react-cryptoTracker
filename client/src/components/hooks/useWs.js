import { useState, useEffect } from 'react';

const useWs = (symbol) => {
  const [lastPrice, setLastPrice] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const ws = await loadPriceTicker(symbol);

        ws.onmessage = (event) => {
          setLoading(false);
          let stockObject = JSON.parse(event.data);
          const price = parseFloat(stockObject.data.c).toFixed(3);
          setLastPrice((prevState) => {
            if (prevState.value < price) {
              return { value: price, color: 'green' };
            }
            if (prevState.value > price) {
              return { value: price, color: 'red' };
            }
            return { value: price, color: 'black' };
          });
        };
      } catch (error) {
        console.log(error);
      }
    })();
  }, [symbol]);
  function loadPriceTicker(symbol = 'btcusdt') {
    return new Promise((resolve, reject) => {
      let ws = new WebSocket(`ws://localhost:5000/live?symbol=${symbol}`);

      ws.onopen = function () {
        console.log('connected');
        resolve(ws);
      };

      ws.onerror = (err) => {
        reject(err);
        ws.open();
      };
      ws.onclose = () => {
        console.log('disconnected');
      };
    });
  }
  return [lastPrice, loading];
};

export default useWs;
