import React from "react";
import { Route } from "react-router-dom";
import { shallow } from "enzyme";

import { TopNav } from "../components/Navbar";

import Meetups from "../components/Meetups";
import Signin from "../components/Signin";
import Signup from "../components/Signup";

describe("<Navbar /> component", () => {
  const wrapper = shallow(<TopNav />);
  test("<Router /> renders correct routes", () => {
    const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
      const routeProps = route.props();
      pathMap[routeProps.path] = routeProps.component;
      return pathMap;
    }, {});

    expect(pathMap["/"]).toBe(Meetups);
    expect(pathMap["/signin/"]).toBe(Signin);
    expect(pathMap["/signup/"]).toBe(Signup);
  });

  test("toggle navbar collapse", () => {
    let toggler = wrapper.find("NavbarToggler");
    toggler.simulate("click");
    expect(wrapper.state()).toEqual({ isOpen: true });
  });

  test("show sign-out link when signed in", () => {
    wrapper.setProps({ isSignedIn: true });
    expect(wrapper.find("[data-test='signed-in']")).toHaveLength(1);
  });
});
