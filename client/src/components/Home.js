import React, { useState, useEffect } from 'react';
import Products from './Products/Products';
import Navbar2 from './Navbar/Navbar';

import '../App.css';
import { commerce } from '../lib/commerce';
import Cart from './Cart/Cart';
import { Route, Switch } from "react-router-dom";
import Checkout from './Checkout/Checkout';
import Ticker from './Ticker/Ticker';
import ImageCarousel from './Carousel/ImageCarousel';
import { Grid, Container, Typography } from '@material-ui/core';
import Chat from './Chat/Chat';
import BottomBanner from './Banner/BottomBanner';
import MediaBanner from './Banner/MediaBanner';





const Home = () => {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  }

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  }

  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);
    setCart(cart);
  }

  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });
    setCart(cart)
  }

  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);
    setCart(cart)
  }

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();

    setCart(cart);
  }

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);


  return (

    <div className="home" >
      <Navbar2 totalItems={cart.total_items} />
      <Switch>
        <Route exact path="/">
          <ImageCarousel />
          <div className="mediaBackground">

            <MediaBanner />

            <Grid container justify="space-around" className="mainMedia" spacing={1}>
              <Grid item align="center" xs={12} sm={8} md={5} lg={5}>
                <Chat />
              </Grid>
              <Grid item align="center" item xs={12} sm={8} md={5} lg={5}>
                <Ticker />
                <BottomBanner />
              </Grid>
            </Grid>



            <Products products={products} onAddToCart={handleAddToCart} />
          </div>
        </Route>
        <Route exact path="/cart">
          <Cart
            cart={cart}
            handleUpdateCartQty={handleUpdateCartQty}
            handleEmptyCart={handleEmptyCart}
            handleRemoveFromCart={handleRemoveFromCart}
          />
        </Route>
        <Route exact path="/checkout">
          <Checkout />
        </Route>
      </Switch>
    </div >




  )
};

export default Home;