import { EventAction, MyEvent, types } from "../types/types";

export const addEvent = (event: MyEvent): EventAction => ({
  type: types.eventAdd,
  payload: event,
});

export const setActiveEvent = (event: MyEvent): EventAction => ({
  type: types.eventSetActive,
  payload: event,
});

export const clearActiveEvent = (): EventAction => ({
  type: types.eventClearActive,
  payload: null,
});

export const updatedEvent = (event: MyEvent): EventAction => ({
  type: types.eventUpdated,
  payload: event,
});

export const deleteEvent = (): EventAction => ({
  type: types.eventDelete,
  payload: null,
});
