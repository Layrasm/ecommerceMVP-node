import React from 'react';
import mediaBanner from '../../assets/media.png';
import './banner.css';

const MediaBanner = () => {
  return (
    <div>
      <img className="mediaBanner" src={mediaBanner} />
    </div>
  )
}

export default MediaBanner
