import React from "react";
import { shallow } from "enzyme";
import { Redirect } from "react-router";

import { store } from "../utils/testUtils";
import { Signin } from "../components/Signin";

describe("<Signin /> component", () => {
  let props;
  let shallowWrapper;
  beforeEach(() => {
    props = {};
    props.loadingAction = jest.fn();
    props.signIn = jest.fn();
    shallowWrapper = shallow(<Signin store={store} {...props} />);
  });

  test("loadingAction & signIn called on submit", () => {
    const form = shallowWrapper.find("Connect(Form)");
    form.simulate("submit");
    const loadingSpy = jest.spyOn(
      shallowWrapper.instance().props,
      "loadingAction"
    );
    const signinSpy = jest.spyOn(shallowWrapper.instance().props, "signIn");
    expect(loadingSpy).toHaveBeenCalled();
    expect(signinSpy).toHaveBeenCalled();
  });

  test("Signin form renders correctly", () => {
    expect(shallowWrapper.find("[data-test='form-test']")).toHaveLength(1);
  });

  test("Toast shows on error", () => {
    let errorProps = {
      loading: true,
      error: true
    };
    let wrapper = shallow(<Signin store={store} {...errorProps} />);
    expect(wrapper.find("[data-test='error-test']")).toHaveLength(1);
  });

  test("loading renders correctly", () => {
    let loadingProps = {
      loading: true
    };
    let wrapper = shallow(<Signin store={store} {...loadingProps} />);
    expect(wrapper.find("[data-test='spinner-test']")).toHaveLength(1);
  });

  test("redirects on success", () => {
    let redirectProps = {
      loading: true,
      isSignedIn: true
    };
    let wrapper = shallow(<Signin store={store} {...redirectProps} />);
    expect(wrapper.find(Redirect)).toHaveLength(1);
  });
});
