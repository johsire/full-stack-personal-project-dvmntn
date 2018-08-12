import * as constants from '../constants/account-constants';
import { performGet } from '../utilities/api-helpers';

// ACTION CREATORS
export const getUser = (id) => (dispatch) => {
  return performGet(dispatch, `/api/user/${id}`, {}, id, constants.GET_USER);
};

export const getUserOrders = (id) => (dispatch) => {
  return performGet(dispatch, `/api/orders/user/${id}`, {}, id, constants.GET_USER_ORDERS);
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
  