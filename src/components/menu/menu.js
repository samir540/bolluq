import React from "react";
import { NavLink } from "react-router-dom";

// css
import "../../assets/css/_menu.scss";
import { useTranslation } from "react-i18next";

const Menu = () => {
  const { t } = useTranslation();

  return (
    <div className="menu menuCommon">
      <NavLink to={"/about"}>{t("haqqimizda")}</NavLink>  
      <NavLink to={"/history"}>{t("tariximiz")}</NavLink>
      <NavLink to={"/principles"}>{t("deyerlerimiz")}</NavLink>
      {/* <NavLink to={"/structure"}>{t("struktur")}</NavLink> */}
      <NavLink to={"/productions"}>{t("istehsalat")}</NavLink>
      <NavLink to={"/news"}>{t("xeberler")}</NavLink>
    </div>
  );
};

export default React.memo(Menu);
