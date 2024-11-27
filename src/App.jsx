import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterForm from "./components/Register";
import Profile from "./components/Profile";
import LoginForm from "./components/Login";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
