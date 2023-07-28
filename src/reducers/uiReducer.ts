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

    default:
      return state;
  }
};
