import React from "react";
import { Container } from "reactstrap";
import Title from "../components/title/title";
import Menu from "../components/menu/menu";

// css
import "../assets/css/_structure.scss";

const Structure = () => {
  return (
    <div className="structure">
      <Title title={"BİZ KİMİK"} />
      <Container>
        <div className="structure__wrapper">
          <Menu />
          <div className="structure__info">
            <div className="structure__titleImg">
              <svg
                width={1016}
                height={446}
                viewBox="0 0 1016 446"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width={1016}
                  height={446}
                  rx={8}
                  fill="#C4C4C4"
                  fillOpacity="0.31"
                />
              </svg>
            </div>
          </div>
          <div className="structure__person">
            <h2 className="title">Vəzifəli şəxslər</h2>
            <div className="structure__personList">
              {[1, 2, 3].map((item) => (
                <div key={item} className="structure__personList--item">
                  <div className="structure__personImageBox">
                    <img
                      src={require("../assets/images/person.svg").default}
                      alt=""
                    />
                  </div>
                  <div className="structure__description">
                    <h3>Əli Samadov</h3>
                    <span>Direktor</span>
                    <a href="mailto:alisamadov@gmail.com">
                      <img
                        src={require("../assets/images/mailPerson.svg").default}
                        alt="mail"
                      />
                      alisamadov@gmail.com
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="structure__person">
            <h2 className="title">Mükafatlandırma</h2>
            <div className="structure__personListEnd">
              {[1, 2].map((item) => (
                <div key={item} className="structure__personListEnd--item">
                  <h2>Ayın işçisi</h2>
                  <div className="structure__personImageBox">
                    <img
                      src={require("../assets/images/person.svg").default}
                      alt=""
                    />
                  </div>
                  <div className="structure__description">
                    <h3 className="d-flex justify-content-between align-items-center">
                      Əli Samadov
                      <svg
                        width={17}
                        height={34}
                        viewBox="0 0 17 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.6667 14.05V0H0V14.05C0 14.6333 0.3 15.1833 0.816666 15.4833L7.78333 19.6667L6.13333 23.5667L0.45 24.05L4.76667 27.7833L3.45 33.3333L8.33333 30.3833L13.2167 33.3333L11.9167 27.7833L16.2333 24.05L10.55 23.5667L8.9 19.6667L15.8667 15.4833C16.3667 15.1833 16.6667 14.65 16.6667 14.05ZM6.66667 15.1167L3.33333 13.1167V3.33333H6.66667V15.1167ZM13.3333 13.1167L10 15.1167V3.33333H13.3333V13.1167Z"
                          fill="#BF0807"
                        />
                      </svg>
                    </h3>
                    <span>Direktor</span>
                    <div className="structure__personListEnd--content">
                      <p>
                        Cəmiyyətin Logistika və inzibati işlər şöbəsinin
                        Logistika sektorunun sürücüsü Ali Salmanov vəzifə
                        öhdəliklərini yüksək peşəkarlıqla yerinə yetirərək,
                        səmərəli fəaliyyəti ilə fərqlənməyi bacarmışdır.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Structure;
