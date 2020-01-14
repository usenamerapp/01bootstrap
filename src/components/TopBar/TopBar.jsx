import React from "react";
import { NavLink } from "react-router-dom";
import "./TopBar.scss";

export default () => {
  return (
    <div className="topbar">
      <ul>
        <li className="topbar__item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="topbar__item">
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </div>
  );
};
