import React from "react";
import { Container } from "reactstrap";
import HumanResurcesMenu from "../components/menu/humanResurcesMenu";
import "../assets/css/_humanResurcers.scss";
import Title from "../components/title/title";
import { useQuery } from "react-query";
import { rule } from "../queries/queries";
import renderHTML from "react-render-html";
import { useTranslation } from "react-i18next"; 

const InternShipRules = () => {
  const { data, isLoading } = useQuery(["rules"], rule);
  const {t} = useTranslation();

  return (
    <>
      <Title title={t("insanresurslari")} />
      <Container>
        <div className="humansResurces">
          <HumanResurcesMenu />
          {isLoading === false && data !== undefined && data.data.length !== 0 && (
            <div className="humansResurces__info">
              <img src={data.data.image} alt="" />
              {renderHTML(data.data.description)}
            </div>
          )}
        </div>
      </Container>
    </>
  );
};

export default InternShipRules;
