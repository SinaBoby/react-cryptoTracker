import React, { useEffect, useRef } from 'react';

const LightChart = ({ pair }) => {
  const divRef = useRef(null);

  console.log(divRef);
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = 'https://s3.tradingview.com/tv.js';
    script1.async = true;
    script1.type = 'text/javascript';

    script1.innerHTML = new window.TradingView.MediumWidget({
      symbols: [[`BINANCE:${pair}|1D`]],
      chartOnly: false,
      width: '100%',
      height: '600px',
      locale: 'en',
      colorTheme: 'dark',
      gridLineColor: 'rgba(42 ,46, 57, 0)',
      fontColor: '#787B86',
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
      bottomColor: 'rgba(41, 98, 255, 0)',
      topColor: 'rgba(41, 98, 255, 0.3)',
      container_id: `btc`,
    });
    if (divRef.current) divRef.current.append(script1);
  }, []);

  return (
    <div className="TechnicalWidget-wrapper">
      <div
        className="tradingview-widget-container"
        id="btc"
        style={{ width: '800px', height: '600px', position: 'relative' }}
        ref={divRef}
      ></div>
    </div>
  );
};
export default LightChart;
