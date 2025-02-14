import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; // For an optional menu icon
import './Header.css';

function Header() {
  return (
    <div className="header-container">
      <AppBar position="static" style={{ zIndex: 1300 }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" className="menu-button">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className="title">
            LEGAL MIND
          </Typography>
          <div className="nav-buttons">
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/login">Login</Button>
            <Button color="inherit" component={Link} to="/register">Register</Button>
          </div>
        </Toolbar>
      </AppBar>
      <div className="floating-circles">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </div>
  );
}

export default Header;
