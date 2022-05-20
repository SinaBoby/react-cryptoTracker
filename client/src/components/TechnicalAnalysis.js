import React, { useEffect, useRef, useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
const TechnicalAnalysis = ({ pair }) => {
  const technicalRef = useRef(null);
  if (technicalRef.current) technicalRef.current.innerHTML = ''
  const { theme } = useContext(ThemeContext);

  useEffect(() => {console.log(pair)
    const script = document.createElement('script');
    script.src =
      'https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js';
    script.async = true;
    script.type = 'text/javascript';

    script.innerHTML = JSON.stringify({
      interval: '1m',
      autoSize: false,
      width: 400,
      isTransparent: false,
      height: 500,
      symbol: `BINANCE:${pair}`,
      showIntervalTabs: true,
      locale: 'en',
      colorTheme: `${theme.background === '#222222' ? 'dark' : 'light'}`,
      containerId:"eth"
    });
    
    if (technicalRef.current) technicalRef.current.append(script);
  }, [theme]);

  return (
    <div className="TechnicalAnalysisWidget-wrapper">
      <div className="tradingview-widget-container" id="eth" ref={technicalRef}>
        
      </div>
    </div>
  );
};
export default TechnicalAnalysis;

/* <!-- TradingView Widget BEGIN -->
<div class="tradingview-widget-container">
  <div class="tradingview-widget-container__widget"></div>
  <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/symbols/BTCUSDT/technicals/" rel="noopener" target="_blank"><span class="blue-text">Technical Analysis for BTCUSDT</span></a> by TradingView</div>
  <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js" async>
  {
  "interval": "1m",
  "width": "100%",
  "isTransparent": false,
  "height": "100%",
  "symbol": "BINANCE:BTCUSDT",
  "showIntervalTabs": true,
  "locale": "en",
  "colorTheme": "dark"
}
  </script>
</div>
<!-- TradingView Widget END --> */
