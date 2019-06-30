import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

import { Meetups } from "../components/Meetups";

describe("<Meetups /> component", () => {
  let props;
  let shallowWrapper;
  beforeEach(() => {
    props = {
      meetups: [
        {
          id: 1,
          title: "Another test meetup"
        }
      ]
    };
    props.fetchMeetups = jest.fn();
    shallowWrapper = shallow(<Meetups {...props} />);
  });

  test("renders without crashing", () => {
    const wrapper = renderer.create(<Meetups {...props} />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test("fetches meetups on load", () => {
    const spy = jest.spyOn(shallowWrapper.instance().props, "fetchMeetups");
    expect(spy).toHaveBeenCalled();
  });

  test("meetup cards render correctly", () => {
    expect(shallowWrapper.find("[data-test='meetup-cards-test']")).toHaveLength(
      1
    );
  });
});
