import React from "react";
import { Container } from "reactstrap";
import Menu from "../components/menu/menu";
import "../assets/css/_productions.scss";
import { useQuery } from "react-query";
import { productions } from "../queries/queries";
import { Link } from "react-router-dom";
import renderHtml from "react-render-html";
import Title from "../components/title/title";
import { useTranslation } from "react-i18next";

const Productions = () => {
  const { data, isLoading } = useQuery(["productions"], productions, {
    refetchOnWindowFocus: false,
  });
  const {t}= useTranslation();

  return (
    <>
      <Title title={t("bizkimik")} />
      <section className="productions">
        <Container>
          <div className="d-flex ">
            <Menu />
            <div className="productions__wrapper">
              {isLoading === false &&
                data !== undefined &&
                data.data.map((item) => (
                  <div
                    className="productions__wrapper__item d-flex justify-content-center align-items-center flex-row"
                    key={item.id}
                  >
                    <img src={item.image} alt={item.title} />
                    <div className="productions__wrapper__item--content">
                      <h2>{item.title}</h2>
                      <p>{renderHtml(item.description)}</p>
                      <div className="productions__wrapper__item--content--arrow">
                        <Link to={"/productions/" + item.slug}>
                          {t("dahaetrafli")} &#8594;
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Productions;
