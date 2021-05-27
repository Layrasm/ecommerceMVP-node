import React from 'react';
import bottomBanner from '../../assets/bottomBanner.png';
import './banner.css';

const BottomBanner = () => {
  return (
    <div>
      <img className="bottomBanner" src={bottomBanner} />
    </div >
  )
}

export default BottomBanner;
