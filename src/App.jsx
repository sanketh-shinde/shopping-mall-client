import { Route, Routes } from "react-router-dom";

import RegisterForm from "./components/employee/Register";
import AssignManager from "./components/employee/AssignManager";
import LoginForm from "./components/employee/Login";
import Profile from "./components/profile/Profile";
import Home from "./components/Home";
import StockLandingPage from "./components/stock/StockLandingPage";
import CreateStock from "./components/stock/CreateStock";
import CategoryStock from "./components/stock/CategoryStock";
import PriceRangeStock from "./components/stock/PriceRangeStock";
import UpdateStock from "./components/stock/UpdateStock";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route
            path="register"
            element={
              <PrivateRoute>
                <RegisterForm />
              </PrivateRoute>
            }
          />
          <Route
            path="register/assign-manager/:id"
            element={
              <PrivateRoute>
                <AssignManager />
              </PrivateRoute>
            }
          />
          <Route path="login" element={<LoginForm />} />
          <Route
            path="profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route
            path="stock"
            element={
              <PrivateRoute>
                <StockLandingPage />
              </PrivateRoute>
            }
          />
          <Route
            path="stock/:category"
            element={
              <PrivateRoute>
                <CategoryStock />
              </PrivateRoute>
            }
          />
          <Route
            path="stock/priceRange"
            element={
              <PrivateRoute>
                <PriceRangeStock />
              </PrivateRoute>
            }
          />
          <Route
            path="stock/create"
            element={
              <PrivateRoute>
                <CreateStock />
              </PrivateRoute>
            }
          />
          <Route
            path="stock/update/:id"
            element={
              <PrivateRoute>
                <UpdateStock />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
