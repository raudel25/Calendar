import { fetchNoToken } from "../helpers/fetch";
import { AppDispatch } from "../store/store";
import { AuthAction, types } from "../types/types";

export const login = (id: number, name: string): AuthAction => ({
  type: types.authLogin,
  payload: { id, name },
});

export const logout = (): AuthAction => ({
  type: types.authLogout,
  payload: {},
});

export const startLogin = (email: string, password: string) => {
  return async (dispatch: AppDispatch) => {
    const resp = await fetchNoToken("auth/login", { email, password }, "POST");

    const body = await resp.json();

    if (resp.ok) {
      localStorage.setItem("token", body.token);
      localStorage.setItem("token-init-time", new Date().getTime().toString());
      dispatch(login(body.id, body.name));
    }
  };
};
