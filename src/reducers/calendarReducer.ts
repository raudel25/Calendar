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
        active: action.payload.event!,
      };

    case types.eventClearActive:
      return {
        ...state,
        active: null,
      };

    case types.eventAdd:
      return {
        ...state,
        events: state.events.concat([action.payload.event!]),
      };

    case types.eventUpdated:
      return {
        ...state,
        events: state.events.map((event) =>
          event.id === action.payload.event!.id ? action.payload.event! : event
        ),
      };

    case types.eventDelete:
      return {
        ...state,
        events: state.events.filter(
          (event) => event.id !== action.payload.event!.id
        ),
        active: null,
      };

    case types.eventsLoad:
      return {
        ...state,
        events: action.payload.events!,
      };

    default:
      return state;
  }
};
