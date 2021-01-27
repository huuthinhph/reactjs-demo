import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { useStyles } from './conent-css';
import Loading from '../loading';
import { getImages } from '../../services/getData/fetchImages';
import { useParams } from "react-router-dom";

const Content = (props) => {
	const classes = useStyles();
  const params = useParams();
  console.log('params', params);
  const initialState = {
    isLoading: false,
    arrImages: [],
  }
  const [state, setState] = useState(initialState);

  const checkSearch = (keyWord) => {
    if (keyWord.indexOf('?search=') !== -1) {
      return keyWord.slice(7);
    } else {
      return keyWord;
    }
  };

  const getData = async (keyWord) => {
    try {
      setState({...state, isLoading: true});
      const responses = await getImages(keyWord);
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
      setState({...state, isLoading: false, arrImages: data});
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    console.log(checkSearch(params.id));
    if (checkSearch(params.id) !== '') {
      getData(checkSearch(params.id));
    };
  }, [params.id]);

  return (
		<>
			{state.isLoading ?
      (
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 80}}>
        <Loading/>
      </div>
      ):(
			<>
				<div className={classes.titleContent}>
					<p>{checkSearch(params.id)} Pictures</p>
				</div>
				<Grid container spacing={2}>
					{state.arrImages.map((image, index) => {
						return (
							<Grid item xs={6} xl={3} md={4} lg={3} key={index + ''} className={'containerImage'} >
								<img width={'100%'} src={image.url} />
							</Grid>
						)
					})}
				</Grid>
			</>
			)}
		</>
	)
}

export default Content;