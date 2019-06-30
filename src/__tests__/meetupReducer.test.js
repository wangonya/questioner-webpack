import { FETCH_MEETUPS, ERROR } from "../actions/types";
import meetupReducer from "../reducers/meetupReducer";

describe("meetupReducer", () => {
  test("returns initialState when no action is passed", () => {
    const newState = meetupReducer(undefined, {});
    expect(newState).toEqual({ error: null, loading: true, meetups: [] });
  });
  test("state changes when FETCH_MEETUPS is dispatched", () => {
    const newState = meetupReducer(undefined, { type: FETCH_MEETUPS });
    expect(newState.loading).toBe(false);
  });
  test("state changes when ERROR is dispatched", () => {
    const newState = meetupReducer(undefined, { type: ERROR });
    expect(newState.loading).toBe(false);
    // TODO: TEST FOR TRUTHY ERROR STATE
  });
});
