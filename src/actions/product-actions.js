import * as constants from '../constants/product-constants';
import { performGet } from '../utilities/api-helpers';
import { API_URL, UNSPLASH_URL } from '../constants';


const UNSPLASH_ACCESS_KEY = '4bbb36ca58e2743df2f6e75f65394c4f2fba5ac5045cf8cb1034168ee1f1fd19';

// ACTION CREATORS
export const getProducts = () => async (dispatch) => {
 return performGet(dispatch, `/api/products/`, {}, null, constants.GET_PRODUCTS);
};

export const getUnsplashPhotos = () => async (dispatch) => {
 return performGet(dispatch, `${UNSPLASH_URL}${UNSPLASH_ACCESS_KEY}`, {}, null, constants.GET_UNSPLASH_PHOTOS )
}
