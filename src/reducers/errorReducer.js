import { ERROR } from "./../actions/types";

const initialState = {
  loading: false,
  error: null
};

export default function(state = initialState, action) {
  if (action.type === ERROR) {
    return {
      loading: false,
      error: action.payload
    };
  } else {
    return state;
  }
}
