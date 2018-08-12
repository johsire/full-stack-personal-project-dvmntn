import { combineReducers } from 'redux';

import AccountReducer from './account-reducer';
import ProductsReducer from './products-reducer';

export default combineReducers({
  AccountReducer,
  ProductsReducer,
});
