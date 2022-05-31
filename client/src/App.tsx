import "./styles/global.scss";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Tabs from "./components/Tab";
import RegistrationPage from "./pages/RegistrationPage";
import { onInit } from "./hooks/onInit";
import Protected from "./components/ProtectedRoute";

function App() {
  onInit();

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate to="/login" />} />
        <Route element={<Tabs />}>
          <Route
            path="login"
            element={
              <Protected protectAuth={false}>
                <LoginPage />
              </Protected>
            }
          />
          <Route
            path="registration"
            element={
              <Protected protectAuth={false}>
                <RegistrationPage />
              </Protected>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
