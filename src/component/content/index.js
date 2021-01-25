import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { useStyles } from './conent-css';
import Loading from '../loading';
import { useParams } from "react-router-dom";

const Content = (props) => {
	const {arrImages, isLoading} = props;
	const classes = useStyles();
	const params = useParams();
	console.log(params);
  return (
		<>
			{isLoading ?
      (
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 80}}>
        <Loading/>
      </div>
      ):(
			<>
				<div className={classes.titleContent}>
					<p>Mountain Pictures</p>
				</div>
				<Grid container spacing={2}>
					{arrImages.map((image, index) => {
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