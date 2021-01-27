import * as actionTypes from '../actions/actionTypes';

const initState = {
  data: ['abcabc', '11111'],
};

const imagesReducer = (state = initState, action) => {
  return state;
    const a = actionTypes.REQUEST_GET_IMAGES;
  // switch (action.type) {
  //   case actionTypes.ADD_TO_CART:
  //     return addToCart(state, action);
  //   case actionTypes.UPDATE_AN_ITEM:
  //     return updateAnItem(state, action);
  //   case actionTypes.DELETE_FROM_CART:
  //     return deleteFromCart(state, action);
  //   default:
  //     return state;
  // }
}

export default imagesReducer;
