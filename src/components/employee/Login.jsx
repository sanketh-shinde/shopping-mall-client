import { useState } from "react";

import styles from "../../styles/Employee.module.css";

const LoginForm = () => {
  const initialState = {
    phoneNumber: "",
    password: "",
  };

  const [loginData, setLoginData] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginData);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1 className={styles.heading}>Login</h1>
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
