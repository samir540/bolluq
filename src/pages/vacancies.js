import React from "react";
import { Container } from "reactstrap";
import HRMenu from "../components/menu/humanResurcesMenu";
// css
import "../assets/css/_vacancies.scss";


const Vacancies = () => {
  return (
    <div className="vacancies">
      <Container>
        <div className="d-flex ">
          <HRMenu />
          <div className="vacancies__wrapper d-flex justify-content-center flex-column">
            <div className="vacancies__wrapper__block d-flex justify-content-around flex-row">
              <div className="vacancies__wrapper__block--position-info">
                <h3>Marketinq rəhbəri</h3>
                <p>Bolluq MMC</p>

                <p>
                  <span>
                    <img
                      src={require("../assets/images/mapIcon.svg").default}
                      alt="mapIcon"
                    />
                  </span>{" "}
                  Bakı filialı
                </p>
              </div>
              <div className="vacancies__wrapper__block--deadline-date d-flex justify-content-center align-items-center">
                <div>
                  <p>
                    <span>
                      <img
                        src={require("../assets/images/calendar.svg").default}
                        alt="mapIcon"
                      />
                    </span>
                    Son müraciət tarixi:{" "}
                    <span className="vacancies__wrapper__block--deadline-date--date">
                      11.11.11
                    </span>
                  </p>
                </div>
              </div>
              <div className="vacancies__wrapper__block--more-info d-flex align-items-end">
                <p>
                  Daha ətraflı bax
                  <span>
                    <img
                      src={require("../assets/images/arrow.svg").default}
                      alt="mapIcon"
                    />
                  </span>
                </p>
              </div>
            </div>
            <div className="vacancies__wrapper__block d-flex justify-content-around flex-row">
              <div className="vacancies__wrapper__block--position-info">
                <h3>Marketinq rəhbəri</h3>
                <p>Bolluq MMC</p>

                <p>
                  <span>
                    <img
                      src={require("../assets/images/mapIcon.svg").default}
                      alt="mapIcon"
                    />
                  </span>{" "}
                  Bakı filialı
                </p>
              </div>
              <div className="vacancies__wrapper__block--deadline-date d-flex justify-content-center align-items-center">
                <div>
                  <p>
                    <span>
                      <img
                        src={require("../assets/images/calendar.svg").default}
                        alt="mapIcon"
                      />
                    </span>
                    Son müraciət tarixi:{" "}
                    <span className="vacancies__wrapper__block--deadline-date--date">
                      11.11.11
                    </span>
                  </p>
                </div>
              </div>
              <div className="vacancies__wrapper__block--more-info d-flex align-items-end">
                <p>
                  Daha ətraflı bax
                  <span>
                    <img
                      src={require("../assets/images/arrow.svg").default}
                      alt="mapIcon"
                    />
                  </span>
                </p>
              </div>
            </div>
            <div className="vacancies__wrapper__block d-flex justify-content-around flex-row">
              <div className="vacancies__wrapper__block--position-info">
                <h3>Marketinq rəhbəri</h3>
                <p>Bolluq MMC</p>

                <p>
                  <span>
                    <img
                      src={require("../assets/images/mapIcon.svg").default}
                      alt="mapIcon"
                    />
                  </span>{" "}
                  Bakı filialı
                </p>
              </div>
              <div className="vacancies__wrapper__block--deadline-date d-flex justify-content-center align-items-center">
                <div>
                  <p>
                    <span>
                      <img
                        src={require("../assets/images/calendar.svg").default}
                        alt="mapIcon"
                      />
                    </span>
                    Son müraciət tarixi:{" "}
                    <span className="vacancies__wrapper__block--deadline-date--date">
                      11.11.11
                    </span>
                  </p>
                </div>
              </div>
              <div className="vacancies__wrapper__block--more-info d-flex align-items-end">
                <p>
                  Daha ətraflı bax
                  <span>
                    <img
                      src={require("../assets/images/arrow.svg").default}
                      alt="mapIcon"
                    />
                  </span>
                </p>
              </div>
            </div>
            <div className="vacancies__wrapper__block d-flex justify-content-around flex-row">
              <div className="vacancies__wrapper__block--position-info">
                <h3>Marketinq rəhbəri</h3>
                <p>Bolluq MMC</p>

                <p>
                  <span>
                    <img
                      src={require("../assets/images/mapIcon.svg").default}
                      alt="mapIcon"
                    />
                  </span>{" "}
                  Bakı filialı
                </p>
              </div>
              <div className="vacancies__wrapper__block--deadline-date d-flex justify-content-center align-items-center">
                <div>
                  <p>
                    <span>
                      <img
                        src={require("../assets/images/calendar.svg").default}
                        alt="mapIcon"
                      />
                    </span>
                    Son müraciət tarixi:{" "}
                    <span className="vacancies__wrapper__block--deadline-date--date">
                      11.11.11
                    </span>
                  </p>
                </div>
              </div>
              <div className="vacancies__wrapper__block--more-info d-flex align-items-end">
                <p>
                  Daha ətraflı bax
                  <span>
                    <img
                      src={require("../assets/images/arrow.svg").default}
                      alt="mapIcon"
                    />
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Vacancies;
