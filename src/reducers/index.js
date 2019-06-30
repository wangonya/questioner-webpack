import { combineReducers } from "redux";
import { createForms } from "react-redux-form";

import meetupReducer from "./meetupReducer";
import signinReducer from "./signinReducer";
import loadingReducer from "./loadingReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  meetups: meetupReducer,
  loading: loadingReducer,
  error: errorReducer,
  ...createForms({
    signin: signinReducer
  })
});
