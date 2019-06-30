import { ERROR } from "./types";

export const errorAction = err => dispatch => {
  dispatch({
    type: ERROR,
    payload: err
  });
};
