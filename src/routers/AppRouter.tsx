import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AuthRouter } from "./AuthRouter";
import { CalendarScreen } from "../components/calendar/CalendarScreen";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/*" element={<AuthRouter />} />
        <Route path="/" element={<CalendarScreen />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
