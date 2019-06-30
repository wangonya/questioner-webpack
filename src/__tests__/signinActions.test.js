import { signIn } from "../actions/signinActions";
import { store } from "../utils/testUtils";

describe("signinActions", () => {
  beforeEach(() => {
    store.clearActions();
  });

  test("Dispatches SIGN_IN", async () => {
    let userData = {
      email: "testemail",
      password: "testpass"
    };
    await store.dispatch(signIn(userData));
    const actions = store.getActions();
    expect(actions[0].type).toEqual("SIGN_IN");
  });
});
