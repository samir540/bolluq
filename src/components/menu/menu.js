import React from "react";
import { NavLink } from "react-router-dom";

// css
import "../../assets/css/_menu.scss";

const Menu = ({ lang }) => {
  return (
    <div className="menu">
      <NavLink to={lang + "/about"}>HAQQIMIZDA</NavLink>
      <NavLink to={lang + "/history"}>TARİXİMİZ</NavLink>
      <NavLink to={lang + "/deyer"}>DƏYƏRLƏRİMİZ</NavLink>
      <NavLink to={lang + "/structure"}>STRUKTUR</NavLink>
      <NavLink to={lang + "/productions"}>İSTEHSALAT</NavLink>
      <NavLink to={lang + "/news"}>XƏBƏRLƏR</NavLink>
    </div>
  );
};

export default Menu;
