import { UiAction, UiState, types } from "../types/types";

const initialState = { openModal: false };

export const uiReducer = (
  state: UiState = initialState,
  action: UiAction
): UiState => {
  switch (action.type) {
    case types.uiOpenModal:
      return {
        ...state,
        openModal: true,
      };

    case types.uiCloseModal:
      return {
        ...state,
        openModal: false,
      };

    default:
      return state;
  }
};
