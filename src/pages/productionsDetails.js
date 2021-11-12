import React from "react";
import { Container } from "reactstrap";
import Menu from "../components/menu/menu";
import "../assets/css/_productionsDetails.scss";

const ProductionsDetails = () => {
  return (
    <section className="productionsDetails">
      <Container>
        <div className="d-flex">
          <Menu />
          <div className="productionsDetails__wrapper">
            <div className="productionsDetails__wrapper__item d-flex justify-content-center align-items-center flex-column">
              <img
                src={
                  require("../assets/images/productionsDetailsPhoto.png")
                    .default
                }
                alt="Koroglu_Fabriki"
              />
              <div className="productionsDetails__wrapper__item--content">
                <h2>Koroglu fabriki</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into.
                </p>
                <div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProductionsDetails;
