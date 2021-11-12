import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "../../assets/css/_newsSlider.scss";
import { Link } from "react-router-dom";
import renderHtml from "react-render-html";
import PropTypes from "prop-types";

const NewsSlider = ({ items, title, lang }) => {
  return (
    <div className="newsSlider">
      <h2 className="title">{title}</h2>
      <div className="newsSlider__sliderBox">
        <Splide
          options={{
            gap: "39px",
            perPage: 3,
            arrows: items.data.length > 3 ? true : false,
          }}
        >
          {items.data.map((item) => (
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
                  <Link to={`${lang}/news/${item.slug}`}>
                    Daha ətrafli bax
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
  items: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

export default NewsSlider;
