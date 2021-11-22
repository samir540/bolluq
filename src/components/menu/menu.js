import React from "react";
import { NavLink } from "react-router-dom";

// css
import "../../assets/css/_menu.scss";

const Menu = () => {
  return (
    <div className="menu">
      <NavLink to={"/about"}>HAQQIMIZDA</NavLink>
      <NavLink to={"/history"}>TARİXİMİZ</NavLink>
      <NavLink to={"/principles"}>DƏYƏRLƏRİMİZ</NavLink>
      <NavLink to={"/structure"}>STRUKTUR</NavLink>
      <NavLink to={"/productions"}>İSTEHSALAT</NavLink>
      <NavLink to={"/news"}>XƏBƏRLƏR</NavLink>
    </div>
  );
};

export default React.memo(Menu);
