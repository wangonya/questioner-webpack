import { LOADING } from "../actions/types";
import loadingReducer from "../reducers/loadingReducer";

describe("loadingReducer", () => {
  test("returns initialState when no action is passed", () => {
    const newState = loadingReducer(undefined, {});
    expect(newState).toEqual({ loading: false });
  });
  test("state changes when LOADING is dispatched", () => {
    const newState = loadingReducer(undefined, { type: LOADING });
    expect(newState.loading).toBe(true);
  });
});
