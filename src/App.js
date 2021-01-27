import React, { useState, useEffect } from 'react';
import './App.css';
import { Container } from '@material-ui/core';
import Header from './component/header';
import Navigation from './component/navigation';
import Content from './component/content';
import PaginationComponent from './component/pagination';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  return (
    <Router>
      <Container>
        <Header />
        <Navigation />
        <Switch>
          <Route path="/:id">
            <Content />
          </Route>
          {/* <Route path="/beach">
            <Loading />
          </Route>
          <Route path="/bird">
            <Loading />
          </Route>
          <Route path="/food">
            <Loading />
          </Route> */}
        </Switch>
        <PaginationComponent />
      </Container>
    </Router>
  );
}

export default App;
