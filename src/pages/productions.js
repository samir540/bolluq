import React from "react";
import { Container } from "reactstrap";
import Menu from "../components/menu/menu";
import "../assets/css/_productions.scss";

const Productions = () => {
  return (
    <section className="productions">
      <Container>
        <div className="d-flex ">
          <Menu />
          <div className="productions__wrapper">
            <div className="productions__wrapper__item d-flex justify-content-center align-items-center flex-row">
              <img
                src={require("../assets/images/koroglu.png").default}
                alt="Koroglu_Fabriki"
              />
              <div className="productions__wrapper__item--content">
                <h2>Koroglu fabriki</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into.
                </p>
                <div className="productions__wrapper__item--content--arrow">
                  <a href="#">Daha ətraflı &#8594; </a>
                </div>
              </div>
            </div>
            <div className="productions__wrapper__item d-flex justify-content-center align-items-center flex-row">
              <img
                src={require("../assets/images/masazir.png").default}
                alt="Koroglu_Fabriki"
              />
              <div className="productions__wrapper__item--content">
                <h2>Masazir fabriki</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into.
                </p>
                <div className="productions__wrapper__item--content--arrow">
                  <a href="#">Daha ətraflı &#8594; </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Productions;
