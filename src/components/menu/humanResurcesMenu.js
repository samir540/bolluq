import React from "react";
import { NavLink } from "react-router-dom";

// css
import "../../assets/css/_menu.scss";

const HumanResurcesMenu = () => {
  return (
    <div className="menu">
      <NavLink to={"/internship"}>TƏCRÜBƏ PROQRAMLARI</NavLink>
      <NavLink to={"/rules"}>İŞƏ MÜRACİƏT QAYDALARI</NavLink>
      <NavLink to={"/vacancies"}>VAKANSİYALAR</NavLink>
    </div>
  );
};

export default HumanResurcesMenu;
