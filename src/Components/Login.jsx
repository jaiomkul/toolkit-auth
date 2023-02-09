import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginApi } from "../Redux/login";

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const login = useSelector((state) => state.login.login);
  console.log("dataMain", login.message);

  function handelChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    setUser((values) => ({ ...values, [name]: value }));
  }

  function handelSubmit(e) {
    e.preventDefault();
    dispatch(loginApi(user));
  }

  return (
    <div>
      <h3>Login: Enter your Email and Password</h3>
      <div className="signupDiv">
        <label htmlFor="">Email</label>
        <input
          type="email"
          name="email"
          value={user.email}
          placeholder="Enter your email"
          onChange={handelChange}
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          name="password"
          value={user.password}
          placeholder="Enter your password"
          onChange={handelChange}
        />

        <input type="submit" value="Submit" onClick={handelSubmit} />
      </div>
    </div>
  );
};
