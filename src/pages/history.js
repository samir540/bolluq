import React, { useRef } from "react";
import { Container } from "reactstrap";
import Menu from "../components/menu/menu";

// css
import "../assets/css/_history.scss";
import Title from "../components/title/title";
import { useQuery } from "react-query";
import { histories } from "../queries/queries";
import { useTranslation } from "react-i18next";

const History = () => {
  const endRef = useRef(null);
  const { t } = useTranslation();
  const { data, isLoading } = useQuery(["histories"], histories, {
    refetchOnWindowFocus: false,
    onSuccess: function (succ) {
      if (succ.status === 200) {
        endRef.current.previousSibling.classList.add("end");
      }
    },
  });

  return (
    <div className="history">
      <Title title={t("bizkimik")} />
      <Container>
        <div className="history__wrapper">
          <Menu />
          <div className="history__info">
            <h2 className="history__title">
              Ugur hekayemiz <span>1993-cı </span> ilde başladı.
            </h2>
            <div className="history__itemsBox">
              {isLoading === false &&
                data !== undefined &&
                data.data.map((item, index) => (
                  <div
                    className={
                      index + 1 === data.data.length
                        ? "history__itemsBox--item end"
                        : "history__itemsBox--item"
                    }
                    ref={endRef}
                  >
                    <strong>{item.date}</strong>
                    <p>{item.description}</p>
                    <img src={item.image} alt={item.alt} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default History;
