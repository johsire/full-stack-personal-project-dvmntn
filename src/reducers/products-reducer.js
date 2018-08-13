import { handleActions } from 'redux-actions';
import * as constants from '../constants/product-constants';

const initialState = {
  products: { results: [], loaded: false },
  unsplashPhotos: { results: {}, loaded: false },
};

export default handleActions(
  {
    // GET_PRODUCTS:GET_START
    [`${constants.GET_PRODUCTS}:GET_START`](state) {
      return {
        ...state,
        loaded: false,
      };
    },
    // GET_PRODUCTS:GET_SUCCESS
    [`${constants.GET_PRODUCTS}:GET_SUCCESS`](state, { payload }) {
      return {
        ...state,
        products: { results: { ...payload }, loaded: true },
      };
    },
    // GET_UNSPLASH_PHOTOS:GET_START
    [`${constants.GET_UNSPLASH_PHOTOS}:GET_START`](state) {
      return {
        ...state,
        loaded: false,
      };
    },
    // GET_UNSPLASH_PHOTOS:GET_SUCCESS
    [`${constants.GET_UNSPLASH_PHOTOS}:GET_SUCCESS`](state, { payload }) {
      return {
        ...state,
        unsplashPhotos: { results: { ...payload }, loaded: true },
      };
    },
  },
  initialState,
);
