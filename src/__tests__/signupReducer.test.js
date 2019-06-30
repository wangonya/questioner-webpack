import { SIGN_IN } from "../actions/types";
import signupReducer from "../reducers/signupReducer";

describe("signupReducer", () => {
  test("returns initialState when no action is passed", () => {
    const newState = signupReducer(undefined, {});
    expect(newState.isSignedIn).toBe(false);
  });
  test("state changes when SIGN_IN action is called", () => {
    const newState = signupReducer(undefined, { type: SIGN_IN });
    expect(newState.isSignedIn).toBe(true);
  });
});
