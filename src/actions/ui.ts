import { UiAction, types } from "../types/types";

export const openModalAct = (): UiAction => ({ type: types.uiOpenModal });
export const closeModalAct = (): UiAction => ({ type: types.uiCloseModal });
