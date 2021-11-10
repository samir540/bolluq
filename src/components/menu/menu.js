import React from "react";
import { NavLink } from "react-router-dom";

// css
import "../../assets/css/_menu.scss";

const Menu = () => {
  return (
    <div className="menu">
      <NavLink to={"/about"}>HAQQIMIZDA</NavLink>
      <NavLink to={"/history"}>TARİXİMİZ</NavLink>
      <NavLink to={"/"}>DƏYƏRLƏRİMİZ</NavLink>
      <NavLink to={"/"}>STRUKTUR</NavLink>
      <NavLink to={"/"}>İSTEHSALAT</NavLink>
      <NavLink to={"/"}>XƏBƏRLƏR</NavLink>
    </div>
  );
};

export default Menu;
