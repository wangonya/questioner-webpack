import { FETCH_MEETUPS, ERROR } from "./../actions/types";

const initialState = {
  meetups: [],
  error: null,
  loading: true
};

export default function(state = initialState, action) {
  if (action.type === FETCH_MEETUPS) {
    return {
      ...state,
      meetups: action.payload,
      loading: false
    };
  } else if (action.type === ERROR) {
    return {
      ...state,
      loading: false,
      error: action.payload
    };
  } else {
    return state;
  }
}
