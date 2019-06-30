import React from "react";
import { shallow } from "enzyme";

import { About } from "../components/About";

describe("<About /> component", () => {
  test("renders about page", () => {
    const wrapper = shallow(<About />);
    expect(wrapper.find("[data-test='about-page']")).toHaveLength(1);
  });
});
