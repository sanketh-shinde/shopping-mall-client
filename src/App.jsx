import { Route, Routes } from "react-router-dom";

import RegisterForm from "./components/employee/Register";
import AssignManager from "./components/employee/AssignManager";
import LoginForm from "./components/employee/Login";
import Profile from "./components/profile/Profile";
import Home from "./components/Home";
import StockLandingPage from "./components/stock/StockLandingPage";
import CreateStock from "./components/stock/CreateStock";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="register" element={<RegisterForm />} />
          <Route
            path="register/assign-manager/:id"
            element={<AssignManager />}
          />
          <Route path="login" element={<LoginForm />} />
          <Route path="profile" element={<Profile />} />
          <Route path="stock" element={<StockLandingPage />} />
          <Route path="stock/create" element={<CreateStock />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
