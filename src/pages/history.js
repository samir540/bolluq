import React from "react";
import { Container } from "reactstrap";
import Menu from "../components/menu/menu";

// css
import "../assets/css/_history.scss";
import Title from "../components/title/title";

const History = () => {
  return (
    <div className="history">
      <Title title="BİZ KİMİK" />
      <Container>
        <div className="history__wrapper">
          <Menu />
          <div className="history__info">
            <h2 className="history__title">
              Ugur hekayemiz <span>1993-cı </span> ilde başladı.
            </h2>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default History;
