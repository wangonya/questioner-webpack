import axios from "axios";

import { SIGN_IN, ERROR } from "./types";

export const signUp = data => dispatch => {
  let userData = {
    firstname: data.firstname,
    lastname: data.lastname,
    email: data.email,
    password: data.password,
    phonenumber: data.phonenumber
  };
  axios
    .post("https://questioner2.herokuapp.com/api/v2/auth/signup", userData)
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
