import React from "react";
import { Container } from "reactstrap";
import Menu from "../components/menu/menu";
import Title from "../components/title/title";

// css
import "../assets/css/_values.scss";

const Values = () => {
  return (
    <div className="values">
      <Title title={"BİZ KİMİK"} />
      <Container>
        <div className="values__wrapper">
          <Menu />
          <div className="values__info">
            {[1, 2, 3, 4, 5].map((item) => (
              <div className="values__info--items" key={item}>
                <div className="values__infoImageBox">
                  <img
                    src={require("../assets/images/item.svg").default}
                    alt=""
                  />
                </div>
                <div className="values__infoText">
                  <h2>Sosial məsuliyyet</h2>
                  <p>
                    Biz müştərilərimizə düzgün şəkildə xidmət göstərə bilmək
                    üçün hər zaman dürüstük və güclü mənəvi prinsiplərə sahibik.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Values;
