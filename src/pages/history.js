import React, { useEffect, useRef } from "react";
import { Container } from "reactstrap";
import Menu from "../components/menu/menu";

// css
import "../assets/css/_history.scss";
import Title from "../components/title/title";

const History = () => {
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current.previousSibling.classList.add("end");
  }, []);

  return (
    <div className="history">
      <Title title="BİZ KİMİK" />
      <Container>
        <div className="history__wrapper">
          <Menu />
          <div className="history__info">
            <h2 className="history__title">
              Ugur hekayemiz <span>1993-cı </span> ilde başladı.
            </h2>
            <div className="history__itemsBox">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
                <div
                  className={
                    index + 1 === [1, 2, 3, 4, 5, 6, 7, 8, 9].length
                      ? "history__itemsBox--item end"
                      : "history__itemsBox--item"
                  }
                  ref={endRef}
                >
                  <strong>1993</strong>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and ty
                    pesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unk nown
                    printer took a galley of type and scrambled it to m ake a
                    type specimen book. It has survived not only five ce
                    nturies, but also the leap into electronic
                  </p>
                  <img
                    src={require("../assets/images/history.jfif").default}
                    alt=""
                  />
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
