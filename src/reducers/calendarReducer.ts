import { EventAction, EventState, types } from "../types/types";

const initialState = { events: [], active: null };

export const calendarReducer = (
  state: EventState = initialState,
  action: EventAction
): EventState => {
  switch (action.type) {
    case types.eventSetActive:
      return {
        ...state,
        active: action.payload,
      };

    case types.eventAdd:
      return {
        ...state,
        events: state.events.concat([action.payload]),
      };

    default:
      return state;
  }
};
