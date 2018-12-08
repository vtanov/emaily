import { FETCH_USER } from "../actions/types";

export default function(state = null, action) {
  // console every single actions that this reducer
  // is called with to understand what's happening:
  switch (action.type) {
    // MAKE SURE THIS REDUCERS RETURNS ALWAYS
    // either null, User or false:
    case FETCH_USER:
      // console.log(action.payload);
      // explicitly reruturn false NOT empty sring
      // if no payload => payload == " "
      // then return " " or false => we return FALSE
      return action.payload || false;
    default:
      return state;
  }
}
