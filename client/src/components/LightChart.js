import React, { useEffect, useRef, useContext } from 'react';
import { ThemeContext } from '../ThemeContext';


const LightChart = ({ pair }) => {
  const divRef = useRef(null);
  const {theme} = useContext(ThemeContext)
  useEffect(() => {
    console.log(theme)
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.type = 'text/javascript';

    script.innerHTML = new window.TradingView.MediumWidget({
      symbols: [[`BINANCE:${pair}|1D`]],
      chartOnly: false,
      width: '100%',
      height: '600px',
      locale: 'en',
      colorTheme: `${theme.background === "#222222" ? "dark" : "light"}`,
     
      isTransparent: false,
      autosize: true,
      showVolume: true,
      scalePosition: 'right',
      scaleMode: 'Normal',
      fontFamily: 'Trebuchet MS, sans-serif',
      noTimeScale: false,
      valuesTracking: '1',
      chartType: 'area',
      lineColor: '#2962FF',
      gridLineColor: 'rgba(42 ,46, 57, 0)',
      fontColor: '#787B86',
      container_id: `btc`,
    });
    if (divRef.current) divRef.current.append(script);
  },[theme, pair]);

  return (
    <div className="TechnicalWidget-wrapper">
      <div
        className="tradingview-widget-container"
        id="btc"
        
        ref={divRef}
      ></div>
    </div>
  );
};
export default LightChart;
