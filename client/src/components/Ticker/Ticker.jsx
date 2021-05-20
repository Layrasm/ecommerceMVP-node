import React from 'react';
import './ticker.css';
import logo from '../../assets/Dogecoin_Logo.png';
import PriceCard from './PriceCard';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core';


const Ticker = () => {

  const [ticker, setTicker] = useState({
    low: 0,
    high: 0,
    last: 0,
  });



  useEffect(() => {
    async function getDogecoinPrice() {
      const { data } = await axios.get(
        'https://nitinr-cors.herokuapp.com/https://api.wazirx.com/api/v2/tickers/dogeusdt'
      );
      setTicker(data.ticker);
    }
    getDogecoinPrice();
    setInterval(() => getDogecoinPrice(), 1000);
  }, []);

  return (
    <div className="tickerMain">
      <img className="tickerPhoto" src={logo} width={150} height={150} alt="dogecoin logo" />
      <Typography className="titleTicker">Live Dogecoin Price</Typography>
      <Typography className="subtitleTicker">To The Moon 🚀🌕</Typography>
      <Grid container className="priceContainer">
        <PriceCard type="low" price={parseFloat(ticker.low).toFixed(3)} />
        <PriceCard type="high" price={parseFloat(ticker.high).toFixed(3)} />
        <PriceCard type="current" price={parseFloat(ticker.last).toFixed(4)} />
      </Grid>
      <div>
        <h5 className="priceDescription">* Last 24 Hours</h5>
      </div>
    </div>
  )
}

export default Ticker;
