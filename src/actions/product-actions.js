import * as constants from '../constants/product-constants';
import { performGet } from '../utilities/api-helpers';
import { API_URL, UNSPLASH_URL } from '../constants';

require('dotenv').config();

const { UNSPLASH_ACCESS_KEY } = process.env;

// ACTION CREATORS
export const getProducts = () => async (dispatch) => {
 return performGet(dispatch, `${API_URL}/api/products/`, {}, null, constants.GET_PRODUCTS);
};

export const getUnsplashPhotos = () => async (dispatch) => {
 return performGet(dispatch, `${UNSPLASH_URL}${UNSPLASH_ACCESS_KEY}`, {}, null, constants.GET_UNSPLASH_PHOTOS )
}
