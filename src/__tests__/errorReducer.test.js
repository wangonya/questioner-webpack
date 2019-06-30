import { ERROR } from "../actions/types";
import errorReducer from "../reducers/errorReducer";

describe("errorReducer", () => {
  test("returns initialState when no action is passed", () => {
    const newState = errorReducer(undefined, {});
    expect(newState).toEqual({ error: null, loading: false });
  });
  test("state changes when ERROR is dispatched", () => {
    const newState = errorReducer(undefined, { type: ERROR, payload: "test" });
    expect(newState.loading).toBe(false);
    expect(newState.error).toBe("test");
  });
});
