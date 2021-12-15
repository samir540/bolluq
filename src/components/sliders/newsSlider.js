import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "../../assets/css/_newsSlider.scss";
import { Link } from "react-router-dom";
import renderHtml from "react-render-html";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const NewsSlider = ({ items, title }) => {
  const { t } = useTranslation();

  return (
    <div className="newsSlider">
      <h2 className="title">{title}</h2>
      <div className="newsSlider__sliderBox">
        <Splide
          options={{
            gap: "39px",
            perPage: 3,
            pagination: false,
            interval: 3000,
            autoplay: true,
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
              <div className="newsSlider__items">
                <div className="newsSlider__items--imgBox">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="newsSlider__items--info">
                  <h3>
                    {item.title}
                    <span>{item.category.title}</span>
                  </h3>
                  <div className="newsSlider__items--text">
                    {renderHtml(item.description)}
                  </div>
                  <Link to={`/news/${item.slug}`}>
                    {t("dahaetraflibax")}
                    <svg
                      width={15}
                      height={12}
                      viewBox="0 0 15 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.32004 0.410522L14.2082 5.66241M14.2082 5.66241L9.32004 10.9143M14.2082 5.66241L0.71936 5.66241"
                        stroke="#BF0807"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

NewsSlider.propTypes = {
  items: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default NewsSlider;
