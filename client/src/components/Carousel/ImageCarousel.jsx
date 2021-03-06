import React from 'react';
import Carousel from 'react-material-ui-carousel';
import CarouselItem from './CarouselItem';
import './carousel.css';
import carouselHat from '../../assets/carousel-hat.png';
import carouselBag from '../../assets/carousel-bag.png';
import { Grid } from '@material-ui/core';
import brandName from '../../assets/brand-name.png';

const ImageCarousel = () => {
  var items = [
    {
      name: "hats",
      imgSrc: carouselHat,
    },
    {
      name: "bags",
      imgSrc: carouselBag,

    }
  ]

  return (
    <Grid container spacing={4} className="carouselRoot">

      <Grid item xs={12} sm={10} md={8} lg={4}>
        <img className="brandName" src={brandName} />
      </Grid>

      <Grid item xs={12} sm={10} md={8} lg={4}>
        <Carousel autoPlay={false}>
          {items.map((item, i) => <CarouselItem key={i} item={item} />)}
        </Carousel>
      </Grid>
    </Grid>
  )
}

export default ImageCarousel;
