import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { useDispatch } from "react-redux";
import { uiReducer } from "../reducers/uiReducer";
import { calendarReducer } from "../reducers/calendarReducer";

const reducer = combineReducers({
  ui: uiReducer,
  calendar: calendarReducer,
  // TODO: authReducer
});

export const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export type RootState = ReturnType<typeof reducer>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export default store;
