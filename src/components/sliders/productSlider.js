import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import PropTypes from "prop-types";
import "../../assets/css/_productSlider.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ProductSlider = ({ items }) => {
  const { t } = useTranslation();

  return (
    <div className="productSlider">
      <h1 className="title">{t("yenimehsullar")}</h1>
      <Splide
        options={{
          gap: "39px",
          perPage: 4,
          pagination: false,
          arrows: items.length > 4 ? true : false,
          breakpoints: {
            1265: {
              perPage: 2,
            },
            992: {
              perPage: 1,
            },
          },
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
                    <span>{t("ceki")}</span>
                    <span>{item.weight}</span>
                  </p>
                  <p>
                    <span>{t("qablasdirma")}</span>
                    <span>{item.packaging}</span>
                  </p>
                  <p>
                    <span>{t("kod")}</span>
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
