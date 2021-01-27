import * as actionTypes from '../actions/actionTypes';

export function requestGetImages(payload) {
  console.log(payload);
  return {
    type: actionTypes.REQUEST_GET_IMAGES,
    payload,
  };
};
