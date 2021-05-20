import React from 'react';
import { Card, CardMedia, Button } from '@material-ui/core';


const CarouselItem = ({ item }) => {

  return (
    <Card className="carouselContent">
      <CardMedia className="carouselImage" image={item.imgSrc} alt="" />
      <Button className="carouselButton">
        View All
        </Button>
    </Card>
  )
}

export default CarouselItem;
