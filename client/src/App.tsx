import "./styles/global.scss";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Tabs from "./components/Tab";
import RegistrationPage from "./pages/RegistrationPage";
import { onInit } from "./hooks/onInit";
import Protected from "./components/ProtectedRoute";
import Header from "./components/Header";
import StudentLayout from "./components/StudentLayout";
import TeacherLayout from "./components/TeacherLayout";
import MyBallsPage from "./pages/MyBallPage";
import Layout from "./components/Layout";
import AllBallsPage from "./pages/AllBallsPage";
import AddBallsPage from "./pages/AddBallsPage";

function App() {
  onInit();

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
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
          </Route>
          <Route element={<Header />}>
            <Route
              path="/student"
              element={
                <Protected protectAuth>
                  <StudentLayout />
                </Protected>
              }
            >
              <Route index element={<Navigate to="/student/my" />} />
              <Route path="my" element={<MyBallsPage />} />
              <Route path="all" element={<AllBallsPage />} />
            </Route>
            <Route
              path="/teacher"
              element={
                <Protected protectAuth>
                  <TeacherLayout />
                </Protected>
              }
            >
              <Route index element={<Navigate to="/teacher/mark" />} />
              <Route path="mark" element={<AddBallsPage />} />
              <Route path="all" element={<AllBallsPage />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
