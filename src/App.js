import React, { useState, useEffect } from 'react';
import './App.css';
import { Container } from '@material-ui/core';
import { getImages } from './services/getData/fetchImages';
import Header from './component/header';
import Navigation from './component/navigation';
import Content from './component/content';
import Loading from './component/loading';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [arrImages, setArrImages] = React.useState([]);
  const getData = async () => {
    try {
      const responses = await getImages('car');
      const data = [];
      responses.data.photos.photo.map((image, index) => {
        const farm = image.farm;
        const server = image.server;
        const id = image.id;
        const secret = image.secret;
        const title = image.title;
        const url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
        const item = { title, url }
        data.push(item);
      });
      setArrImages(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <Router>
       <Container>
        <Header />
        <Navigation />
        <Switch>
          <Route path="/mountain">
            <Content arrImages={arrImages} isLoading={isLoading} />
          </Route>
          <Route path="/beach">
            <Loading />
          </Route>
          <Route path="/bird">
            <Loading />
          </Route>
          <Route path="/food">
            <Loading />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
