import * as constants from '../constants/account-constants';
import { performGet } from '../utilities/api-helpers';
import { API_URL } from '../constants';

// ACTION CREATORS
export const getUser = (id) => async (dispatch) => {
  return performGet(dispatch, `${API_URL}/api/user/${id}`, {}, id, constants.GET_USER);
};

export const getUserOrders = (id) => async (dispatch) => {
  return performGet(dispatch, `${API_URL}/api/orders/user/${id}`, {}, id, constants.GET_USER_ORDERS);
};

// updateOrder
// `/api/order/${ product_id }`

// deleteOrder
// `/api/order/${id}`

// Below is equivalient to above
// const getUser = (id) => {
// return (dispatch) => {
//   return perforGet(dispatch, `/api/user/${id}`);
//   }
  