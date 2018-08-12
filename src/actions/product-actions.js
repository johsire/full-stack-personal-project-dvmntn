import * as constants from '../constants/product-constants';
import { performGet } from '../utilities/api-helpers';
import { API_URL } from '../constants';

// ACTION CREATORS
export const getProducts = () => async (dispatch) => {
 return performGet(dispatch, `${API_URL}/api/products/`, {}, constants.GET_PRODUCTS);
};
