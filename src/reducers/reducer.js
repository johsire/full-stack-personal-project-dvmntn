
const initalState = {
 order: {}
};

const  UPDATE_USER_ORDERS = 'UPDATE_USER_ORDERS';

export function updateUserOrders(order) {
 return {
   type: UPDATE_USER_ORDERS,
   payload: order
 }
}

export default function reducer(state = initalState, action) {
 switch (action.type) {
   case UPDATE_USER_ORDERS:
   return Object.assign({}, state, { user: action.payload });

   default:
     return state;
 }
};
