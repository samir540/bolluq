import React from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";

// css
import "../assets/css/_newsSlider.scss";
import "../assets/css/_news.scss";
import Menu from "../components/menu/menu";
import CustomPagination from "../components/pagination/pagination";
import Title from "../components/title/title";

const News = () => {
  return (
    <div className="news">
      <Title title={"BİZ KİMİK"} />
      <div className="news__info">
        <Container>
          <div className="news__wrapper">
            <Menu />

            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
              <div
                className={
                  index + 1 < 3
                    ? "newsSlider__items widthHalf"
                    : "newsSlider__items"
                }
                style={{ marginLeft: index + 1 === 2 ? 25 : 0 }}
                key={item}
              >
                <div className="newsSlider__items--imgBox">
                  <img
                    src={require("../assets/images/news.jfif").default}
                    alt=""
                  />
                </div>
                <div className="newsSlider__items--info">
                  <h3>
                    ITECH-Smart Vision
                    <span>Information Technology</span>
                  </h3>
                  <div className="newsSlider__items--text">
                    <p>
                      At Itech, we have a holistic and integrated approach
                      towards core modernization to experience technological
                      evolution.
                    </p>
                  </div>
                  <Link to="">
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
            ))}
          </div>
          <div className="d-flex justify-content-center news__pagination">
            <CustomPagination
              defaultCurrent={1}
              total={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].length}
              pageSize={5}
              events={{}}
            />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default News;
