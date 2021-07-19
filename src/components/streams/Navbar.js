import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ title }) => {
  return (
    <div>
      <nav>
        <h2>{title} Stream Page</h2>
        <ul>
          <li>
            <Link to="/">StreamList</Link>
          </li>
          <li>
            <Link to="/streams/show">StreamShow</Link>
          </li>
          <li>
            <Link to="/streams/new">StreamCreate</Link>
          </li>
          <li>
            <Link to="/streams/edit">StreamEdit</Link>
          </li>
          <li>
            <Link to="/streams/delete">StreamDelete</Link>
          </li>
        </ul>
      </nav>
      <hr />
    </div>
  );
};

export default Navbar;
