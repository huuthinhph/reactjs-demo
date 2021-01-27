import { put, call } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import {getImages} from '../../services/getData/fetchImages';

export default function* getImagesSaga(action) {
  console.log(action);
  const response = yield call(getImages, action.payload.keyWord);
  console.log(response);
  // yield put({ type: 'INCREMENT' });
};
