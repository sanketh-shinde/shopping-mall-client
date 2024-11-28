import React, { useState } from "react";

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
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div>
          <label>
            Phone Number:
            <input
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
          <label>
            Password:
            <input
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
        <input type="submit" value="Login" />
      </form>
    </>
  );
};

export default LoginForm;
