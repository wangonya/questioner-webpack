import { SIGN_IN } from "../actions/types";
import signinReducer from "../reducers/signinReducer";

describe("signinReducer", () => {
  test("returns initialState when no action is passed", () => {
    const newState = signinReducer(undefined, {});
    expect(newState.isSignedIn).toBe(false);
  });
  test("state changes when SIGN_IN action is called", () => {
    const newState = signinReducer(undefined, { type: SIGN_IN });
    expect(newState.isSignedIn).toBe(true);
  });
});
