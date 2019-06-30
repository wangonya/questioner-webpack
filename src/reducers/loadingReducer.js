import { LOADING } from "./../actions/types";

const initialState = {
  loading: false
};

export default function(state = initialState, action) {
  if (action.type === LOADING) {
    return {
      loading: true
    };
  } else {
    return state;
  }
}
