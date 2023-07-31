import { AuthAction, types } from "../types/types";

export const login = (id: number, name: string): AuthAction => ({
  type: types.authLogin,
  payload: { id, name },
});

export const logout = (): AuthAction => ({
  type: types.authLogout,
  payload: {},
});
