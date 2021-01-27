import { combineReducers } from 'redux';

import imagesReducer from './imagesReducer';

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  images: imagesReducer,
});

export default rootReducer;
