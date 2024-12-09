import { useState } from "react";

import { login } from "../../services/authService";

import styles from "../../styles/Employee.module.css";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const initialState = {
    phoneNumber: "",
    password: "",
  };

  const [loginData, setLoginData] = useState(initialState);

  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(loginData)
      .then((response) => {
        const employeeDetails = response.data;
        const employee = employeeDetails.data;
        localStorage.setItem("employee", JSON.stringify(employee));
        navigate("/profile");
        return employeeDetails;
      })
      .catch((error) => {
        console.log(error.response.data);
        setErrorMessage(error.response.data);
        return error;
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1 className={styles.heading}>Login</h1>
        {errorMessage && (
          <p className={styles.error}>{`${errorMessage} try again!`}</p>
        )}
        <div>
          <label className={styles.labelText}>
            Phone Number:
            <input
              className={styles.input}
              type="number"
              placeholder="Enter Phone Number"
              value={loginData.phoneNumber}
              onChange={(e) => {
                setLoginData({ ...loginData, phoneNumber: e.target.value });
              }}
              required
            />
          </label>
        </div>
        <div>
          <label className={styles.labelText}>
            Password:
            <input
              className={styles.input}
              type="password"
              placeholder="Enter Password"
              value={loginData.password}
              onChange={(e) => {
                setLoginData({ ...loginData, password: e.target.value });
              }}
              required
            />
          </label>
        </div>
        <input type="submit" value="Login" className={styles.submit} />
      </form>
    </>
  );
};

export default LoginForm;
