import { AuthAction, AuthState, types } from "../types/types";

const initialState = { login: false };

export const authReducer = (
  state: AuthState = initialState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case types.authLogin:
      return {
        login: true,
        id: action.payload.id!,
        name: action.payload.name!,
      };

    case types.authLogout:
      return {
        login: false,
      };

    default:
      return state;
  }
};
