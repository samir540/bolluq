import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import PropTypes from "prop-types";
import "../../assets/css/_multiSlider.scss";

const MultiSlider = ({ items, title, id }) => {
  return (
    <div className="multiSlider" id={id}>
      <h2 className="title">{title}</h2>
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
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

MultiSlider.propTypes = {
  items: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default MultiSlider;
