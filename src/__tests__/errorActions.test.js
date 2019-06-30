import { errorAction } from "../actions/errorActions";
import { store } from "../utils/testUtils";

describe("errorActions", () => {
  beforeEach(() => {
    store.clearActions();
  });

  test("Dispatches ERROR", () => {
    store.dispatch(errorAction());
    const actions = store.getActions();
    expect(actions[0].type).toEqual("ERROR");
  });
});
