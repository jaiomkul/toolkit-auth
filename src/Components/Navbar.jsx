import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="divNav">
      <ul>
        <li>
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="link" to="/login">
            Login
          </Link>
        </li>
        <li>
          <Link className="link" to="/signup">
            SingUp
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
