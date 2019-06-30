import mockAxios from "axios";
import { fetchMeetups } from "../actions/meetupActions";
import { store } from "../utils/testUtils";

describe("meetupActions", () => {
  beforeEach(() => {
    store.clearActions();
  });

  test("Dispatches FETCH_MEETUPS and returns data on success", async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: {
          data: [
            {
              id: 1,
              title: "Another test meetup"
            }
          ]
        }
      })
    );

    await store.dispatch(fetchMeetups());
    const actions = store.getActions();
    expect(actions[0].type).toEqual("FETCH_MEETUPS");
    expect(actions[0].payload[0].id).toEqual(1);
    expect(actions[0].payload[0].title).toEqual("Another test meetup");
  });
  // TODO: TEST FOR PROMISE.REJECTS
});
