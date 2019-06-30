import { loadingAction } from "../actions/loadingActions";
import { store } from "../utils/testUtils";

describe("loadingActions", () => {
  beforeEach(() => {
    store.clearActions();
  });

  test("Dispatches LOADING", () => {
    store.dispatch(loadingAction());
    const actions = store.getActions();
    expect(actions[0].type).toEqual("LOADING");
  });
});
