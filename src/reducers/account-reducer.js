import { handleActions } from 'redux-actions';
import * as constants from '../constants/acccount-constants';

const initialState = {
  user: { results: {}, loaded: false },
  orders: { results: [], loaded: false },
};

export default handleActions(
  {
    // GET_USER:GET_START
    [`${constants.GET_USER}:GET_START`](state) {
      return {
        ...state,
        loaded: false,
      };
    },

    // GET_USER:GET_SUCCESS
    [`${constants.GET_USER}:GET_SUCCESS`](state, { payload }) {
      return {
        ...state,
        user: { results: { ...payload }, loaded: true },
      };
    },
  },
  initialState,
);