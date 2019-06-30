import axios from "axios";

import { SIGN_IN, ERROR } from "./types";

export const signIn = data => dispatch => {
  let userData = {
    email: data.email,
    password: data.password
  };
  axios
    .post("https://questioner2.herokuapp.com/api/v2/auth/login", userData)
    .then(res => {
      dispatch({
        type: SIGN_IN,
        payload: res.data
      });
      sessionStorage.setItem("token", res.data.data[0].access_token);
    })
    .catch(err => {
      dispatch({
        type: ERROR,
        payload: err.toString()
      });
    });
};
