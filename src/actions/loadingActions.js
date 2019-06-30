import { LOADING } from "./types";

export const loadingAction = () => dispatch => {
  dispatch({
    type: LOADING
  });
};
