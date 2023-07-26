import { Navigate, Route, Routes } from "react-router-dom";
import { RegisterScreen } from "../components/auth/RegisterScreen";
import { LoginScreen } from "../components/auth/LoginScreen";

export const AuthRouter = () => (
  <div>
    <Routes>
      <Route path="/register" element={<RegisterScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="*" element={<Navigate to="/auth/login" replace />} />
    </Routes>
  </div>
);
