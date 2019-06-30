import React from "react";
import { shallow } from "enzyme";

import App from "./../components/App";

describe("<App /> root component", () => {
  test("renders without crashing", () => {
    expect(shallow(<App />)).toMatchSnapshot();
  });

  test("renders <Navbar /> component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Connect(TopNav)")).toHaveLength(1);
  });
});
