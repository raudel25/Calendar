import { EventAction, MyEvent, types } from "../types/types";

export const addEvent = (event: MyEvent): EventAction => ({
  type: types.eventAdd,
  payload: event,
});

export const setActiveEvent = (event: MyEvent): EventAction => ({
  type: types.eventSetActive,
  payload: event,
});
