import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signupApi } from "../Redux/signup";

export const Register = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const hendelChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setUser((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signupApi(user));
  };
  return (
    <div>
      <h3>SignUp: Enter your Details</h3>
      <div className="signupDiv">
        <form onSubmit={handleSubmit}>
          <label htmlFor="">First Name</label>
          <input
            type="text"
            name="firstName"
            value={user.firstName || ""}
            onChange={hendelChange}
            placeholder="Enter your first name"
          />
          <label htmlFor="">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={user.lastName || ""}
            onChange={hendelChange}
            placeholder="Enter your last name"
          />
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            value={user.email || ""}
            onChange={hendelChange}
            placeholder="Enter your email"
          />
          <label htmlFor="">Password</label>
          <input
            type="password"
            name="password"
            value={user.password || ""}
            onChange={hendelChange}
            placeholder="Enter your password"
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};
