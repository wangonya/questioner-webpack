import { signUp } from "../actions/signupActions";
import { store } from "../utils/testUtils";

describe("signupActions", () => {
  beforeEach(() => {
    store.clearActions();
  });

  test("Dispatches SIGN_IN", async () => {
    let userData = {
      email: "testemail",
      password: "testpass"
    };
    await store.dispatch(signUp(userData));
    const actions = store.getActions();
    expect(actions[0].type).toEqual("SIGN_IN");
  });
});
