import { Route, Routes } from "react-router-dom";
import RegisterForm from "./components/Register";
import Profile from "./components/Profile";
import LoginForm from "./components/Login";
import NavBar from "./components/NavBar";
import AssignManager from "./components/AssignManager";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/">
          <Route path="register" element={<RegisterForm />} />
          <Route
            path="register/assign-manager/:id"
            element={<AssignManager />}
          />
          <Route path="login" element={<LoginForm />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
