import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import "./cart.css";
import CartItem from './CartItem/CartItem';
import { Link } from 'react-router-dom';


const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {

  // const isEmpty = !cart.line_items.length;

  const EmptyCart = () => (
    <Typography variant="subtitle1" className="emptyCart">
      Your cart is empty! &nbsp;
      <Link to="/">Continue Shopping</Link>

    </Typography>

  );

  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <CartItem item={item} handleUpdateCartQty={handleUpdateCartQty} handleRemoveFromCart={handleRemoveFromCart} />
          </Grid>
        ))}
      </Grid>
      <div className="cartDetails">
        <Typography variant="h4"> Subtotal: {cart.subtotal.formatted_with_symbol} </Typography>
        <div>
          <Button className="emptyButton" size="large" type="button" variant="contained" onClick={handleEmptyCart}>Empty Cart</Button>
          <Button component={Link} to="/checkout" className="checkoutButton" size="large" type="button" variant="contained">Checkout</Button>

        </div>

      </div>
    </>
  )

  if (!cart.line_items) return 'Loading...';

  return (
    <Container className="cartToolbar">
      <div />
      <Typography className="cartTitle" variant="h4">Shopping Cart</Typography>
      {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  )
};

export default Cart;
