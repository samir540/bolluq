import React from "react";
import { NavLink } from "react-router-dom";

// css
import "../../assets/css/_menu.scss";
import { useTranslation } from "react-i18next";

const HumanResurcesMenu = () => {

  const { t } = useTranslation();

  return (
    <div className="menu menuCommon menuHuman">
      <NavLink to={"/internship"}>{t("tecrubeproqramlari")}</NavLink>
      <NavLink to={"/rules"}>{t("isemuracietqaydalari")}</NavLink>
      <NavLink to={"/vacancies"}>{t("vakansiyalar")}</NavLink>
    </div>
  );
};

export default React.memo(HumanResurcesMenu);
