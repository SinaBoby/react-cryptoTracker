import { useEffect, useRef, useState } from 'react';
const TechnicalWidget = () => {
  const [symbol, setSymbol] = useState('BTCUSDT');
  const refr = useRef(null);

  console.log(refr);
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = 'https://s3.tradingview.com/tv.js';
    script1.async = true;
    script1.type = 'text/javascript';

    script1.innerHTML = new window.TradingView.widget({
      autosize: true,
      symbol: `BINANCE:${symbol}`,
      interval: 'D',
      timezone: 'Europe/Amsterdam',
      theme: 'dark',
      style: '1',
      locale: 'en',
      toolbar_bg: '#f1f3f6',
      enable_publishing: true,
      withdateranges: true,
      range: '1D',
      hide_side_toolbar: false,
      allow_symbol_change: true,
      watchlist: [
        'BINANCE:ETHUSDT',
        'BINANCE:XRPUSDT',
        'BINANCE:BNBUSDT',
        'BINANCE:DOGEUSDT',
      ],
      details: true,
      hotlist: true,
      calendar: true,
      studies: ['Volume@tv-basicstudies'],
      show_popup_button: true,
      popup_width: '1000',
      popup_height: '650',
      container_id: `btc`,
    });
    refr.current.append(script1);
  }, []);

  return (
    <div className="TechnicalWidget-wrapper">
      <div className="tradingview-widget-container" ref={refr}>
        <div id="btc" style={{ width: '800px', height: '600px' }}></div>
      </div>
    </div>
  );
};
export default TechnicalWidget;
