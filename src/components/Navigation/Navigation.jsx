import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={s.nav}>
      <NavLink exact className={s.link} activeClassName={s.activeLink} to="/">
        Home
      </NavLink>
      <NavLink className={s.link} activeClassName={s.activeLink} to="/movies">
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
