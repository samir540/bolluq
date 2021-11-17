import React, { useEffect, useRef, useState } from "react";
import { Container } from "reactstrap";
import Title from "../components/title/title";
import { changeMapLocations } from "../helper/helper";

// css
import "../assets/css/_branch.scss";

const Branch = () => {
  const [name, setName] = useState("merkez");

  const btnRef = useRef([]);

  const spanRefEast = useRef([]);

  const spanRefWest = useRef([]);

  useEffect(() => {
    changeMapLocations(btnRef, spanRefEast, spanRefWest);
  }, []);

  return (
    <div className="branch">
      <Title title={"FİLİALLAR"} />
      <Container>
        <div className="branch__wrapper">
          <div className="branch__map">
            <img src={require(`../assets/images/${name}.svg`).default} alt="" />
          </div>
          <div className="branch__content">
            <div className="branch__content--left">
              <button
                onClick={() => {
                  setName("merkez");
                }}
                ref={(e) => (btnRef.current[0] = e)}
              >
                MƏRKƏZ
              </button>
              <button
                onClick={() => {
                  setName("serq");
                }}
                ref={(e) => (btnRef.current[1] = e)}
              >
                ŞƏRQ ŞÖBƏSİ
              </button>
              <span
                onClick={() => {
                  setName("sirvan");
                }}
                ref={(e) => (spanRefEast.current[0] = e)}
              >
                Şirvan ofisi
              </span>
              <span
                ref={(e) => (spanRefEast.current[1] = e)}
                onClick={() => {
                  setName("imisli");
                }}
              >
                İmişli ofisi
              </span>
              <span
                ref={(e) => (spanRefEast.current[2] = e)}
                onClick={() => {
                  setName("masalli");
                }}
              >
                Masallı ofisi
              </span>
              <span
                ref={(e) => (spanRefEast.current[3] = e)}
                onClick={() => {
                  setName("xacmaz");
                }}
              >
                Xaçmaz ofisi
              </span>
              <button
                onClick={() => {
                  setName("qerb");
                }}
                ref={(e) => (btnRef.current[2] = e)}
              >
                QƏRB ŞÖBƏSİ
              </button>
              <span
                ref={(e) => (spanRefWest.current[0] = e)}
                onClick={() => {
                  setName("seki");
                }}
              >
                Şəki ofisi
              </span>
              <span
                ref={(e) => (spanRefWest.current[1] = e)}
                onClick={() => {
                  setName("samaxi");
                }}
              >
                Şamaxı ofisi
              </span>
              <span
                ref={(e) => (spanRefWest.current[2] = e)}
                onClick={() => {
                  setName("mingecevir");
                }}
              >
                Mingəçevir ofisi
              </span>
              <span
                ref={(e) => (spanRefWest.current[3] = e)}
                onClick={() => {
                  setName("berde");
                }}
              >
                Bərdə ofisi
              </span>
              <span
                ref={(e) => (spanRefWest.current[4] = e)}
                onClick={() => {
                  setName("gence");
                }}
              >
                Gəncə ofisi
              </span>
              <span
                ref={(e) => (spanRefWest.current[5] = e)}
                onClick={() => {
                  setName("tovuz");
                }}
              >
                Tovuz ofisi
              </span>
            </div>
            <div className="branch__content--right">
              <p>
                Satış müdiri:
                <span>Zaur Rzayev</span>
              </p>
              <p>
                Telefon:
                <a href="tel:(+994 55) 399 96 99">(+994 55) 399 96 99</a>
                <a href="tel:(+994 55) 399 96 99">(+994 55) 399 96 99</a>
              </p>
              <p>
                E-poçt:
                <a href="mailto:zaur.rzayev@veyseloqlu.az">
                  zaur.rzayev@veyseloqlu.az
                </a>
              </p>
              <p>
                Ünvan:
                <span>Xaçmaz Rayonu N.Nərimanov</span>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Branch;
