import React from "react";
import { shallow } from "enzyme";

import { Meetups } from "../components/Meetups";

describe("<Meetups /> component", () => {
  let props;
  let shallowWrapper;
  beforeEach(() => {
    props = {
      loading: true
    };
    props.fetchMeetups = jest.fn();
    shallowWrapper = shallow(<Meetups {...props} />);
  });
  test("spinner renders correctly", () => {
    expect(shallowWrapper.find("[data-test='spinner-test']")).toHaveLength(1);
  });
});
