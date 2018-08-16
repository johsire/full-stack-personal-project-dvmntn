import * as constants from '../constants/account-constants';
import { performGet } from '../utilities/api-helpers';
import { API_URL } from '../constants';

// ACTION CREATORS
export const getUser = (id) => async (dispatch) => {
  return performGet(dispatch, `/api/user/${id}`, {}, id, constants.GET_USER);
};

export const getUserOrders = (id) => async (dispatch) => {
  return performGet(dispatch, `/api/orders/user/${id}`, {}, id, constants.GET_USER_ORDERS);
};

export const updateUserOrder = (product_id, id) => async (dispatch) => {
  return performPut(dispatch, `/api/order/${product_id, id}`, {}, id, constants.UPDATE_ORDER)
};

export const deleteUserOrder = (id) => async (dispatch) => {
  return performDelete(dispatch, `/api/order/${id}`, {}, id, constants.DELETE_ORDER)
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
  