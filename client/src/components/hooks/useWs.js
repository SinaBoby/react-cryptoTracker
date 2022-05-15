import { useState, useEffect } from 'react';

const useWs = (symbol) => {
  const [lastPrice, setLastPrice] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let wsObject;
    (async () => {
      try {
        const ws = await loadPriceTicker(symbol);
        wsObject = ws;
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
        setError(error)
      }
    })();
    return () => {
      wsObject.close();
    };
  }, [symbol]);
  function loadPriceTicker(symbol = 'btcusdt') {
    return new Promise((resolve, reject) => {
      let ws = new WebSocket(`ws://localhost:5000/live?symbol=${symbol}`);

      ws.onopen = function () {
        console.log('connected');
        resolve(ws);
      };

      ws.onerror = (err) => {
        setTimeout(() => {
          loadPriceTicker((symbol = 'btcusdt'));
        }, 5000);
        reject(err);
      };
      ws.onclose = (event) => {
        console.log('disconnected');
        console.log(event)
      };
    });
  }

  return [lastPrice, loading, error];
};

export default useWs;
