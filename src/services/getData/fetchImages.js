import axios from 'axios';
import {apiKey, baseURL} from '../config';

export const getImages = (keyWord) => {
  const configs = {
    timeout: 10000,
    params: {
      method: 'flickr.photos.search',
      api_key: apiKey,
      tags: keyWord,
      per_page: 24,
      format: 'json',
      nojsoncallback: 1,
    },
    method: 'get',
    baseURL,
  };
  const images = axios.request(configs);
  return images;
}
