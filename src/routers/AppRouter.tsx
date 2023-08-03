import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { CalendarScreen } from "../components/calendar/CalendarScreen";
import { LoginScreen } from "../components/auth/LoginScreen";
import { RootState, useAppDispatch } from "../store/store";
import { useEffect, useState } from "react";
import { startChecking } from "../actions/auth";
import { useSelector } from "react-redux";
import PublicRoutes from "./PublicRoute";
import PrivateRoutes from "./PrivateRoutes";
import { startLoadEvents } from "../actions/events";

export const AppRouter = () => {
  const dispatch = useAppDispatch();

  const [checking, setChecking] = useState(true);

  const { login } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    dispatch(startChecking());

    setChecking(false);
  }, [dispatch]);

  useEffect(() => {
    if (login) {
      dispatch(startLoadEvents());
    }
  }, [login]);

  if (checking) return <h5>Wait...</h5>;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoutes component={LoginScreen} isAuthenticated={login} />
          }
        />
        <Route
          path="/"
          element={
            <PrivateRoutes component={CalendarScreen} isAuthenticated={login} />
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
