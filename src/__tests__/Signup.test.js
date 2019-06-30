import React from "react";
import { shallow } from "enzyme";
import { Redirect } from "react-router";

import { store } from "../utils/testUtils";
import { Signup } from "../components/Signup";

describe("<Signup /> component", () => {
  let props;
  let shallowWrapper;
  beforeEach(() => {
    props = {};
    props.loadingAction = jest.fn();
    props.signUp = jest.fn();
    shallowWrapper = shallow(<Signup store={store} {...props} />);
  });

  test("loadingAction & signUp called on submit", () => {
    const form = shallowWrapper.find("Connect(Form)");
    form.simulate("submit");
    const loadingSpy = jest.spyOn(
      shallowWrapper.instance().props,
      "loadingAction"
    );
    const signupSpy = jest.spyOn(shallowWrapper.instance().props, "signUp");
    expect(loadingSpy).toHaveBeenCalled();
    expect(signupSpy).toHaveBeenCalled();
  });

  test("Signup form renders correctly", () => {
    expect(shallowWrapper.find("[data-test='form-test']")).toHaveLength(1);
  });

  test("Toast shows on error", () => {
    let errorProps = {
      loading: true,
      error: true
    };
    let wrapper = shallow(<Signup store={store} {...errorProps} />);
    expect(wrapper.find("[data-test='error-test']")).toHaveLength(1);
  });

  test("loading renders correctly", () => {
    let loadingProps = {
      loading: true
    };
    let wrapper = shallow(<Signup store={store} {...loadingProps} />);
    expect(wrapper.find("[data-test='spinner-test']")).toHaveLength(1);
  });

  test("redirects on success", () => {
    let redirectProps = {
      loading: true,
      isSignedIn: true
    };
    let wrapper = shallow(<Signup store={store} {...redirectProps} />);
    expect(wrapper.find(Redirect)).toHaveLength(1);
  });
});
