import React, { useState, useEffect } from 'react';
import { Paper, IconButton, InputBase } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import {useStyles} from './header-css'

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.headerContainer}>
      <h2 style={{fontFamily: 'Lobster', fontSize: 50}}>SnapShot</h2>
      <Paper component="form" className={classes.formSearch}>
        <IconButton className={classes.iconButton} aria-label="menu">
          <MenuIcon />
        </IconButton>
        <InputBase
          className={classes.input}
          placeholder="Search Google Maps"
          inputProps={{ 'aria-label': 'search google maps' }}
        />
        <IconButton type="submit" className={classes.iconButton} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  );
};

export default Header;
