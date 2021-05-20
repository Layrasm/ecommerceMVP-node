import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import logo from '../../assets/apple-touch-icon.png';
import './navbar.css';
import { Link, useLocation } from 'react-router-dom';

const Navbar2 = ({ totalItems }) => {

  const location = useLocation();




  return (
    <div>
      <AppBar position="fixed" className="appBar" color="inherit">
        <Toolbar className="toolbar" >
          <Typography component={Link} to="/" className="title" color="inherit" variant="h6">
            <img src={logo} alt="Commerce.js" height="35px" className="image" />
              Woke Supply
          </Typography>
          <div className="grow" />
          {location.pathname === "/" && (
            <div className="button">
              <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>)}
        </Toolbar>

      </AppBar>
    </div>
  )
}

export default Navbar2
