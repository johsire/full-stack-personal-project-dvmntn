
const initialState = {
 user: { },
};


const UPDATE_USER_DATA = 'UPDATE_USER_DATA';

export function updateUserData(user) {
 return {
  type: UPDATE_USER_DATA,
  payload: user
 }
};

export default function reducer(state = initialState, action) {
 switch (action.type) {
  case ACTION_NAME:
   return Object.assign({}, state, {
 
   });
  default:
   return state;
 }
};