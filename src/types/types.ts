export const types = {
  uiOpenModal: "[Ui] Open Modal",
  uiCloseModal: "[Ui] Close Modal",

  eventAdd: "[Event] Add New",
  eventSetActive: "[Event] Set Active",
  eventClearActive: "[Event] Clear Active",
  eventUpdated: "[Event] Updated",
};

export type MyEvent = {
  id: number;
  title: string;
  allDay?: boolean;
  start: number;
  end: number;
  notes: string;
  isImportant?: boolean;
};

export type EventState = { events: Array<MyEvent>; active: null | MyEvent };

export type EventAction = { type: string; payload: MyEvent | null };

export type UiState = { openModal: boolean };

export type UiAction = { type: string };
