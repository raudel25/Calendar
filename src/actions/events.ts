import { fetchWithToken } from "../helpers/fetch";
import { AppDispatch } from "../store/store";
import { EventAction, MyEvent, MyEventNet, types } from "../types/types";
import Swal from "sweetalert2";

export const addEvent = (event: MyEvent): EventAction => ({
  type: types.eventAdd,
  payload: { event },
});

export const setActiveEvent = (event: MyEvent): EventAction => ({
  type: types.eventSetActive,
  payload: { event },
});

export const clearActiveEvent = (): EventAction => ({
  type: types.eventClearActive,
  payload: {},
});

export const updatedEvent = (event: MyEvent): EventAction => ({
  type: types.eventUpdated,
  payload: { event },
});

export const deleteEvent = (event: MyEvent): EventAction => ({
  type: types.eventDelete,
  payload: { event },
});

export const loadEvents = (events: Array<MyEvent>): EventAction => ({
  type: types.eventsLoad,
  payload: { events },
});

export const startUpdateEvent = (id: number, event: MyEventNet) => {
  return async (dispatch: AppDispatch) => {
    try {
      const resp = await fetchWithToken(`event/${id}`, event, "PUT");

      const body = await resp.json();

      if (resp.ok) {
        const { id } = body;

        dispatch(updatedEvent({ ...event, id }));
      } else {
        Swal.fire("Error", body, "error");
      }
    } catch {
      Swal.fire("Error", "Connection error", "error");
    }
  };
};

export const startAddEvent = (event: MyEventNet) => {
  return async (dispatch: AppDispatch) => {
    try {
      const resp = await fetchWithToken("event", event, "POST");

      const body = await resp.json();

      if (resp.ok) {
        const { id } = body;

        dispatch(addEvent({ ...event, id }));
      } else {
        Swal.fire("Error", body, "error");
      }
    } catch {
      Swal.fire("Error", "Connection error", "error");
    }
  };
};

export const startLoadEvents = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const resp = await fetchWithToken("event", {}, "GET");

      const body = await resp.json();

      if (resp.ok) {
        dispatch(loadEvents(body));
      } else {
        Swal.fire("Error", body, "error");
      }
    } catch {
      Swal.fire("Error", "Connection error", "error");
    }
  };
};

export const startDeleteEvent = (event: MyEvent) => {
  return async (dispatch: AppDispatch) => {
    try {
      const resp = await fetchWithToken(`event/${event.id}`, {}, "DELETE");

      const body = await resp.json();

      if (resp.ok) {
        dispatch(deleteEvent(event));
      } else {
        Swal.fire("Error", body, "error");
      }
    } catch {
      Swal.fire("Error", "Connection error", "error");
    }
  };
};
