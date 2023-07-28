export const types = {
  uiOpenModal: "[Ui] Open Modal",
  uiCloseModal: "[Ui] Close Modal",
};

export type UiState = { openModal: boolean };

export type UiAction = { type: string };
