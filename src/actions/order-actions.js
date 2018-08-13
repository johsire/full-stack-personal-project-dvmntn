import * as constants from '../constants/order-constants';
import { performPost } from '../utilities/api-helpers';
import { API_URL, UNSPLASH_URL } from '../constants';


// ACTION CREATORS
export const chargeOrder = data => async (dispatch) => {
  console.log('I AM IN ORDER ACTIONS');
 return performPost(dispatch, `/api/order/`, {}, data, constants.CHARGE_ORDER);
};
