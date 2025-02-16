import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './Header.css';

function Header() {
  return (
    <div className="relative w-screen bg-gray-900 z-10">
  <AppBar position="static" className="bg-gradient-to-r from-gray-900 to-gray-700 shadow-lg">
    <Toolbar className="flex justify-between items-center px-6">
      {/* Logo */}
      <div className="flex items-center">
      <a href="/">
  <img
    src="/leg logo.png"
    alt="Legal AI Logo"
    style={{ height: '40px', width: 'auto' }}
  />
</a>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden lg:flex space-x-6">
        <Button component={Link} to="/" className="text-white font-semibold uppercase px-4 py-2 rounded-md transition-all duration-300 hover:bg-gray-700 hover:text-blue-400">
          Home
        </Button>
        <Button component={Link} to="/bot" className="text-white font-semibold uppercase px-4 py-2 rounded-md transition-all duration-300 hover:bg-gray-700 hover:text-blue-400">
          Legal Assistant
        </Button>
        <Button component={Link} to="/aboutt" className="text-white font-semibold uppercase px-4 py-2 rounded-md transition-all duration-300 hover:bg-gray-700 hover:text-blue-400">
          About Us
        </Button>
      </div>
    </Toolbar>
  </AppBar>

  {/* Floating Circles Animation */}
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {[100, 150, 200].map((size, index) => (
      <div
        key={index}
        className="absolute rounded-full bg-white bg-opacity-10 animate-float"
        style={{
          width: size,
          height: size,
          top: `${10 + index * 30}%`,
          left: `${15 + index * 30}%`,
          animationDelay: `${index * 2}s`,
        }}
      ></div>
    ))}
  </div>
</div>
  );
}

export default Header;
