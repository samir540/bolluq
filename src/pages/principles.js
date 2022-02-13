import React from "react";
import { Container } from "reactstrap";
import Menu from "../components/menu/menu";
import Title from "../components/title/title";
import { useQuery } from "react-query";
import { principles } from "../queries/queries";
import { useTranslation } from "react-i18next";

// css
import "../assets/css/_values.scss";

const Principles = () => {
  const { data, isLoading } = useQuery(["principles"], principles, {
    refetchOnWindowFocus: false,
  });
  
  const {t}=useTranslation();

  return (
    <div className="values">
      <Title title={t("bizkimik")} />
      <Container>
        <div className="values__wrapper">
          <Menu />
          <div className="values__info">
            {isLoading === false &&
              data !== undefined &&
              data.data.map((item) => (
                <div className="values__info--items" key={item.id}>
                  <div className="values__infoImageBox">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="values__infoText">
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Principles;
