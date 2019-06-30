import axios from "axios";

import { FETCH_MEETUPS, ERROR } from "./types";

export const fetchMeetups = () => dispatch => {
  axios
    .get("https://questioner2.herokuapp.com/api/v2/meetups/upcoming")
    .then(res => {
      const meetups = res.data.data;
      dispatch({
        type: FETCH_MEETUPS,
        payload: meetups
      });
    })
    .catch(err => {
      dispatch({
        type: ERROR,
        payload: err
      });
    });
};
