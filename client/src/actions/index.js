// ACTION CREATORS to make ajax requests:
import axios from "axios";
import { FETCH_USER } from "./types";

// REFACTORING AGAIN - ONLY CUZ OF STYLE:
// export const fetchUser = () => {
//   return function(dispatch) {
//     // we want to dispatch an action until
//     // after this api req has been compelted:
//     axios
//       // get the path form authRoutes => app.get()
//       .get("/api/current_user")
//       // only after completeion =>
//       .then(res => dispatch({ type: FETCH_USER, payload: res }));
//   };
// };
export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  // dispatch({ type: FETCH_USER, payload: res });
  // return only data we care about:
  dispatch({ type: FETCH_USER, payload: res.data });
};

// New action creator that handles the tokens form Stripe:
// must be hooked up to Payments.js
export const handleToken = token => async dispatch => {
  const res = await axios.post("/api/stripe", token);
  // after req is completed, what type of action we dispatching now:
  dispatch({ type: FETCH_USER, payload: res.data });
};
