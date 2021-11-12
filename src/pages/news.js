import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";

// css
import "../assets/css/_newsSlider.scss";
import "../assets/css/_news.scss";
import Menu from "../components/menu/menu";
import CustomPagination from "../components/pagination/pagination";
import Title from "../components/title/title";
import { useQuery } from "react-query";
import renderHtml from "react-render-html";
import { newsApi } from "../queries/queries";

const News = ({ lang }) => {
  const [number, setNumber] = useState(0);

  const { data, isLoading } = useQuery(["newsAll", number], newsApi);

  return (
    <div className="news">
      <Title title={"BİZ KİMİK"} />
      <div className="news__info">
        <Container>
          <div className="news__wrapper">
            <Menu lang={lang} />
            {isLoading === false &&
              data.data !== undefined &&
              data.data.map((item, index) => (
                <div
                  className={
                    index + 1 < 3
                      ? "newsSlider__items widthHalf"
                      : "newsSlider__items"
                  }
                  style={{ marginLeft: index + 1 === 2 ? 25 : 0 }}
                  key={item.id}
                >
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

                    <Link to={lang + "/news/" + item.slug}>
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
            {isLoading === false &&
              data.data !== undefined &&
              data.meta.total > 1 && (
                <CustomPagination
                  defaultCurrent={1}
                  total={data.meta.total}
                  pageSize={data.meta.per_page}
                  events={{
                    update: function (e) {
                      setNumber(e);
                    },
                  }}
                />
              )}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default News;
