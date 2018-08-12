// store initial-state
const initialState = {
 order: {}
};


// ACTION TYPES

const  UPDATE_USER_ORDERS = 'UPDATE_USER_ORDERS';
const  UPDATE_USER_ADDRESS = 'UPDATE_USER_ADDRESS';


// HANDLE ACTIONS
 export default function reducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_USER_ORDERS: 
      return Object.assign({}, state, { user: action.payload });
      
    case UPDATE_USER_ADDRESS:
      return Object.assign({}, state, { address: action.payload });

    default:
      return state;
  }
};


// ACTION CREATORS
export function updateUserOrders(order) {
  return {
    type: UPDATE_USER_ORDERS,
    payload: order
   }
 };
 
 export function updateUserAddress(address) {
   return {
     type: UPDATE_USER_ADDRESS,
     payload: address
   }
 };
