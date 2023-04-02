import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 768) {
        setMobileMenu(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My Website
        </Typography>

        {windowWidth < 768 && (
          <IconButton onClick={toggleMobileMenu} edge="end" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        )}

        {windowWidth >= 768 && (
          <List sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 2 }}>
            <ListItem>
              <Link to="/">Home</Link>
            </ListItem>
            <ListItem>
              <Link to="/banner">Banner</Link>
            </ListItem>
            <ListItem>
              <Link to="/about">About</Link>
            </ListItem>
          </List>
        )}

        {mobileMenu && (
          <List sx={{ position: 'absolute', top: '64px', left: 0, width: '100%', bgcolor: 'background.paper' }}>
            <ListItem onClick={toggleMobileMenu}>
              <Link to="/">Home</Link>
            </ListItem>
            <ListItem onClick={toggleMobileMenu}>
              <Link to="/banner">Banner</Link>
            </ListItem>
            <ListItem onClick={toggleMobileMenu}>
              <Link to="/about">About</Link>
            </ListItem>
          </List>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
