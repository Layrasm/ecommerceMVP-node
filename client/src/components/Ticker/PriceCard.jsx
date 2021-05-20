import React from 'react';
import './ticker.css';


const PriceCard = ({ type, price }) => {

  const border = {
    high: '8px solid #0F0',
    low: '8px solid #ff0000',
    current: '8px solid #3f51b5',
  };


  return (
    <div className="priceCard" style={{ borderBottom: border[type] }}>
      <h4 className="priceType">{type}</h4>
      <h1 className="price">${price}</h1>
    </div>
  );
};

export default PriceCard;
