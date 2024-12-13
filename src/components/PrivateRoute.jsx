import { Navigate } from "react-router-dom";
import { user } from "../services/authService";

const PrivateRoute = ({ children }) => {
  const isLoggedIn = user()?.token ? true : false;

  return isLoggedIn ? children : <Navigate to={`/login`} />;
};

export default PrivateRoute;
