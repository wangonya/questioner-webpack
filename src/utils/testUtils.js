import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import promiseMiddleware from "redux-promise-middleware";

const mockStore = configureStore([thunk, promiseMiddleware]);
export const store = mockStore();
