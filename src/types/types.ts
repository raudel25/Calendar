export const types = {
  uiOpenModal: "[Ui] Open Modal",
  uiCloseModal: "[Ui] Close Modal",

  eventAdd: "[Event] Add New",
  eventSetActive: "[Event] Set Active",
};

export type MyEvent = {
  title: string;
  allDay?: boolean;
  start: Date;
  end: Date;
  isImportant?: boolean; 
};

export type EventState = { events: Array<MyEvent>; active: null | MyEvent };

export type EventAction = { type: string; payload: MyEvent };

export type UiState = { openModal: boolean };

export type UiAction = { type: string };
