import React, { useCallback, useState, useRef } from "react";
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
import { useTranslation } from "react-i18next";

const News = () => {
  const [number, setNumber] = useState(0);

  const { t } = useTranslation();

  const totalRef = useRef(null);

  const { data, isLoading } = useQuery(["newsAll", number], newsApi, {
    refetchOnWindowFocus: false,
    onSuccess: function (succ) {
      totalRef.current = succ.meta;
    },
  });

  const setPage = useCallback((e) => {
    setNumber(e);
  }, []);


  return (
    <div className="news">
      <Title title={t("bizkimik")} />
      <div className="news__info">
        <Container>
          <div className="news__wrapper">
            <Menu />
            {isLoading === false &&
              data !== undefined &&
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

                    <Link to={"/news/" + item.slug}>
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
              ))}
          </div>
          <div className="d-flex justify-content-center news__pagination">
            {totalRef.current !== null &&
              totalRef.current.total > totalRef.current.per_page && (
                <CustomPagination
                  defaultCurrent={1}
                  total={totalRef.current.total}
                  pageSize={totalRef.current.per_page}
                  setPage={setPage}
                />
              )}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default News;
