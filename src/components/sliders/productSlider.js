import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import PropTypes from "prop-types";
import "../../assets/css/_productSlider.scss";

const ProductSlider = ({ items }) => {
  return (
    <div className="productSlider">
      <h1 className="title">Yeni Məhsullar</h1>
      <Splide
        options={{
          gap: "39px",
          perPage: 4,
          arrows: items.length > 4 ? true : false,
        }}
      >
        {items.map((item) => (
          <SplideSlide key={item}>
            <div className="productSlider__items">
              <div className="productSlider__items--img">
                <img
                  src={require("../../assets/images/cap.png").default}
                  alt=""
                />
              </div>
              <div className="productSlider__items--info">
                <h2>“Capella’’ gavalılı</h2>
                <p>
                  <span>Çəki</span>
                  <span>1kq</span>
                </p>
                <p>
                  <span>Qablaşdırma</span>
                  <span>1 X {item}</span>
                </p>
                <p>
                  <span>Kod</span>
                  <span>002540</span>
                </p>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

ProductSlider.propTypes = {
  items: PropTypes.array.isRequired,
};

export default ProductSlider;
