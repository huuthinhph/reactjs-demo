import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Paper, IconButton, InputBase, Containerm, TextField } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { Link, useHistory } from "react-router-dom";
import {useStyles} from './header-css';
import * as getImagesAction from '../../redux/actions/getImagesAction';

const Header = () => {
  const dispatch = useDispatch();
  const [keyWord, setKeyWord] = useState('');
  const classes = useStyles();
  let history = useHistory();

  const handleChange = (event) => {
    setKeyWord(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && keyWord.replace(/\s/g, '').length) {
      history.push('?search=' + keyWord);
    };
  };

  const onPressSearch = () => {
    const payload = {
      keyWord: 'car',
    }
    dispatch(getImagesAction.requestGetImages(payload))
    // if (keyWord.replace(/\s/g, '').length) {
    //   history.push('/search=' + keyWord);
    // };
  };

  return (
    <div className={classes.headerContainer}>
      <Link to="/mountain">
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
