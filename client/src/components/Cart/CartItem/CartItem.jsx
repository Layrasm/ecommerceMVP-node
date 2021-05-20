import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';
import './cartItem.css';
import { Redirect } from 'react-router-dom';

const CartItem = ({ item, handleRemoveFromCart, handleUpdateCartQty }) => {



  return (
    <Card className="cartItemRoot">
      <CardMedia image={item.media.source} alt={item.name} className="cartItemMedia" />
      <CardContent className="cartItemCardContent">
        <Typography variant="h4">{item.name}</Typography>
        <div>
          <Typography variant="h5">{item.line_total.formatted_with_symbol}</Typography>
          <Typography>Qty: {item.quantity}</Typography>
        </div>
      </CardContent>
      <CardActions className="cartItemActions">
        <div className="cartItemQuantities">
          <Button variant="contained" className="subtractOne" type="button" size="small" onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}>-</Button>
          <Typography className="qtyText">&nbsp; Qty &nbsp;</Typography>
          <Button variant="contained" className="addOne" type="button" size="small" onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}>+</Button>
        </div>
        <div>
          <Button className="cartRemoveItem" variant="contained" type="button" onClick={() => handleRemoveFromCart(item.id)}>Remove All</Button>
        </div>
      </CardActions >

    </Card >
  )
}

export default CartItem
