import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import PropTypes from "prop-types";
import "../../assets/css/_productSlider.scss";
import { Link } from "react-router-dom";

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
          <SplideSlide key={item.id}>
            <Link to={`/products-detail/${item.slug}`}>
              <div className="productSlider__items">
                <div className="productSlider__items--img">
                  <img src={item.image} alt={item.image} />
                </div>
                <div className="productSlider__items--info">
                  <h2>{item.title}</h2>
                  <p>
                    <span>Çəki</span>
                    <span>{item.weight}</span>
                  </p>
                  <p>
                    <span>Qablaşdırma</span>
                    <span>{item.packaging}</span>
                  </p>
                  <p>
                    <span>Kod</span>
                    <span>{item.code}</span>
                  </p>
                </div>
              </div>
            </Link>
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
