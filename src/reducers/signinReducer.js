import { SIGN_IN } from "./../actions/types";

const initialState = {
  email: "",
  password: "",
  loading: false,
  error: null,
  isSignedIn: false
};

export default function(state = initialState, action) {
  if (action.type === SIGN_IN) {
    return {
      ...state,
      isSignedIn: true
    };
  } else {
    return state;
  }
}
