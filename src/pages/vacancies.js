import React, { useState, useCallback, useRef, useEffect } from "react";
import { Container } from "reactstrap";
import HRMenu from "../components/menu/humanResurcesMenu";
import CustomPagination from "../components/pagination/pagination";
// css
import "../assets/css/_vacancies.scss";
import Title from "../components/title/title";
import { useQuery } from "react-query";
import { vacanciesApi, vacanciesFilter } from "../queries/queries";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


const Vacancies = () => {
  const { t } = useTranslation();
  const [number, setNumber] = useState(0);
  const totalRef = useRef(null);
  const [params, setParams] = useState({
    position: [],
    occupation: [],
  });
  const btnRef = useRef([]);
  const { data, isLoading, refetch } = useQuery(
    ["vacanciesAll", params, number],
    vacanciesApi,
    {
      refetchOnWindowFocus: false,
      onSuccess: function (succ) {
        totalRef.current = succ.meta;
      },
    }
  );

  const vacancyFilter = useQuery(["vacancyFilter"], vacanciesFilter, {
    refetchOnWindowFocus: false,
  });

  const setPage = useCallback((e) => {
    setNumber(e);
  }, []);

  useEffect(() => {
    btnRef.current.forEach((elem) => {
      elem.onclick = function () {
        if (elem.nextElementSibling.classList.contains("hideElem")) {
          elem.nextElementSibling.classList.remove("hideElem");
        } else {
          elem.nextElementSibling.classList.add("hideElem");
        }
      };
    });
  }, []);

  return (
    <div className="vacancies">
      <Title title={t("insanresurslari")} />
      <Container>
        <div className="d-flex align-items-baseline vacancies__wrapper">
          <div className="vacancies__menuBox">
            <HRMenu />
            <div className="menu__details">
              <div className="menu__details--item">
                <div className="menu__detailsSearch vacancies__searchBox">
                  <input type="search" placeholder={t("axtar")} />
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.1498 10.6918H11.3819L11.1098 10.4294C12.0623 9.32133 12.6358 7.88279 12.6358 6.3179C12.6358 2.82847 9.80732 0 6.3179 0C2.82847 0 0 2.82847 0 6.3179C0 9.80732 2.82847 12.6358 6.3179 12.6358C7.88279 12.6358 9.32133 12.0623 10.4294 11.1098L10.6918 11.3819V12.1498L15.5517 17L17 15.5517L12.1498 10.6918ZM6.3179 10.6918C3.89766 10.6918 1.94397 8.73814 1.94397 6.3179C1.94397 3.89766 3.89766 1.94397 6.3179 1.94397C8.73814 1.94397 10.6918 3.89766 10.6918 6.3179C10.6918 8.73814 8.73814 10.6918 6.3179 10.6918Z"
                      fill="#C4C4C4"
                    />
                  </svg>
                </div>
                <div className="parent">
                  <div className="parent__info">
                    <button ref={(e) => (btnRef.current[0] = e)}>
                      {t("vezife")}
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.72407 6.64131C3.94596 6.41942 4.29318 6.39925 4.53786 6.5808L4.60796 6.64131L9.99935 12.0324L15.3907 6.64131C15.6126 6.41942 15.9598 6.39925 16.2045 6.58079L16.2746 6.64131C16.4965 6.8632 16.5167 7.21042 16.3351 7.45509L16.2746 7.52519L10.4413 13.3585C10.2194 13.5804 9.87218 13.6006 9.62751 13.419L9.55741 13.3585L3.72407 7.52519C3.48 7.28112 3.48 6.88539 3.72407 6.64131Z"
                          fill="black"
                        />
                      </svg>
                    </button>
                    <div className="hideElem">
                      {vacancyFilter.isLoading === false &&
                        vacancyFilter.data !== undefined &&
                        vacancyFilter.data.positions.map((item) => (
                          <p className="parent__checkBox" key={item.id}>
                            <label htmlFor={item.title}>
                              <input
                                id={item.title}
                                type="checkbox"
                                onClick={(e) => {
                                  if (e.target.checked === true) {
                                    setParams((prev) => ({
                                      ...prev,
                                      position: [...params.position, item.id],
                                    }));
                                  } else {
                                    const index = params.position.indexOf(
                                      item.id,
                                      0
                                    );
                                    if (index > -1) {
                                      params.position.splice(index, 1);
                                      setParams(params);
                                      refetch();
                                    }
                                  }
                                }}
                              />
                              {item.title}
                            </label>
                          </p>
                        ))}
                    </div>
                  </div>
                  <div className="parent__info">
                    <button ref={(e) => (btnRef.current[1] = e)}>
                      {t("fealiyyet")}
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.72407 6.64131C3.94596 6.41942 4.29318 6.39925 4.53786 6.5808L4.60796 6.64131L9.99935 12.0324L15.3907 6.64131C15.6126 6.41942 15.9598 6.39925 16.2045 6.58079L16.2746 6.64131C16.4965 6.8632 16.5167 7.21042 16.3351 7.45509L16.2746 7.52519L10.4413 13.3585C10.2194 13.5804 9.87218 13.6006 9.62751 13.419L9.55741 13.3585L3.72407 7.52519C3.48 7.28112 3.48 6.88539 3.72407 6.64131Z"
                          fill="black"
                        />
                      </svg>
                    </button>
                    <div className="hideElem">
                      {vacancyFilter.isLoading === false &&
                        vacancyFilter.data !== undefined &&
                        vacancyFilter.data.occupations.map((item) => (
                          <p className="parent__checkBox" key={item.id}>
                            <label htmlFor={item.title}>
                              <input
                                id={item.title}
                                type="checkbox"
                                onClick={(e) => {
                                  if (e.target.checked === true) {
                                    setParams((prev) => ({
                                      ...prev,
                                      occupation: [
                                        ...params.occupation,
                                        item.id,
                                      ],
                                    }));
                                  } else {
                                    const index = params.occupation.indexOf(
                                      item.id,
                                      0
                                    );
                                    if (index >= -1) {
                                      params.occupation.splice(index, 1);
                                      setParams(params);
                                      refetch();
                                    }
                                  }
                                }}
                              />
                              {item.title}
                            </label>
                          </p>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="vacancies__wrapper d-flex justify-content-center flex-column">
            {isLoading === false &&
              data !== undefined &&
              data.data.map((item) => (
                <div
                  className="vacancies__wrapper__block d-flex justify-content-around flex-row"
                  key={item.id}
                >
                  <div className="vacancies__wrapper__block--position-info">
                    <h3>{item.title}</h3>
                    <p>{item.company}</p>
                    <p>
                      <span>
                        <img
                          src={require("../assets/images/mapIcon.svg").default}
                          alt="mapIcon"
                        />
                      </span>{" "}
                      {item.location}
                    </p>
                  </div>
                  <div className="vacancies__wrapper__block--deadline-date d-flex justify-content-center align-items-center">
                    <div>
                      <p>
                        <span>
                          <img
                            src={
                              require("../assets/images/calendar.svg").default
                            }
                            alt="mapIcon"
                          />
                        </span>
                        {t("sonmuraciettarixi")}:{" "}
                        <span className="vacancies__wrapper__block--deadline-date--date">
                          {item.expired_at}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="vacancies__wrapper__block--more-info d-flex align-items-end">
                    <p>
                      <Link to={`/vacancies/${item.slug}`}>
                        {t("dahaetraflibax")}
                        <span>
                          <img
                            src={require("../assets/images/arrow.svg").default}
                            alt="mapIcon"
                          />
                        </span>
                      </Link>
                    </p>
                  </div>
                </div>
              ))}
          </div>
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
  );
};

export default Vacancies;
