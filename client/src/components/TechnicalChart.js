import React from 'react';
import { useParams } from 'react-router-dom';
import TechnicalAnalysis from './TechnicalAnalysis';
import TechnicalWidget from './TechnicalWidget';
function TechnicalChart() {
  const { pair } = useParams();
  return (
    <div>
      <h2>{pair}</h2>
      <TechnicalWidget symbol={pair} />
      <TechnicalAnalysis pair={pair}/>
    </div>
  );
}

export default TechnicalChart;
