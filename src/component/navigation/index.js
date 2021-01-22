import React, { useState, useEffect } from 'react';
import {useStyles} from './navigation-css';
import { Link } from "react-router-dom";

const Navigation = () => {
  const classes = useStyles();
  return (
    <nav className={classes.mainNav}>
      <ul>
        <li>
          <Link to="/mountain">Mountain</Link>
        </li>
        <li>
          <Link to="/beach">Beaches</Link>
        </li>
        <li>
          <Link to="/bird">Birds</Link>
        </li>
        <li>
          <Link to="/food">Food</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation;
