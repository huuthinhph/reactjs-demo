import { all, takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import getImagesSaga from './getImagesSaga';

export default function* rootSaga() {
  yield all([
    takeEvery(actionTypes.REQUEST_GET_IMAGES, getImagesSaga),
  ]);
};
