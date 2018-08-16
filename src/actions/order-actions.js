import * as constants from '../constants/order-constants';
import { performPost, performPut, performDelete } from '../utilities/api-helpers';
import { API_URL, UNSPLASH_URL } from '../constants';


// ACTION CREATORS
export const chargeOrder = data => async (dispatch) => {
  console.log('I AM IN ORDER ACTIONS');
 return performPost(dispatch, `/api/order/`, {}, data, constants.CHARGE_ORDER);
};

// export const updateOrder = (product_id, id) => async (dispatch) => {
//   return performPut(dispatch, `/api/order/${product_id, id}`, {}, id, constants.UPDATE_ORDER)
// };

// export const deleteOrder = (id) => async (dispatch) => {
//   return performDelete(dispatch, `/api/order/${id}`, {}, null, constants.DELETE_ORDER)
// };

// updateOrder
// `/api/order/${ product_id }`

// deleteOrder
// `/api/order/${id}`
