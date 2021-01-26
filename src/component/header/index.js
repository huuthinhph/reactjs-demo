import React, { useState, useEffect } from 'react';
import { Paper, IconButton, InputBase, Containerm, TextField } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { Link, useHistory } from "react-router-dom";
import {useStyles} from './header-css'

const Header = () => {
  const [keyWord, setKeyWord] = useState('');
  const classes = useStyles();
  let history = useHistory();
  console.log(history);
  const handleChange = (event) => {
    setKeyWord(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && keyWord.replace(/\s/g, '').length) {
      history.push('/search=' + keyWord);
    }
  }

  const onPressSearch = () => {
    if (keyWord.replace(/\s/g, '').length) {
      history.push('/search=' + keyWord);
    };
  };

  return (
    <div className={classes.headerContainer}>
      <Link className={classes.logo} to="/mountain">
        <h2 style={{fontFamily: 'Lobster', fontSize: 50}}>SnapShot</h2>
        </Link>
      <Paper className={classes.formSearch}>
        <IconButton className={classes.iconButton} aria-label="menu">
          <MenuIcon />
        </IconButton>
        <InputBase
          className={classes.input}
          placeholder="Search..."
          inputProps={{ 'aria-label': 'search google maps' }}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <IconButton onClick={onPressSearch} className={classes.iconButton} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  );
};

export default Header;
