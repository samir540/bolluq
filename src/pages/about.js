import React, { useEffect, useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Title from "../components/title/title";
import Menu from "../components/menu/menu";
import { Container } from "reactstrap";
import { aboutApi } from "../queries/queries";
import { useQuery } from "react-query";
import renderHtml from "react-render-html";
import { useTranslation } from "react-i18next";

// css
import "../assets/css/_about.scss";

const About = () => {
  const { t } = useTranslation();

  const mainRef = useRef();

  const thumbsRef = useRef();

  useEffect(() => {
    if (mainRef.current && thumbsRef.current && thumbsRef.current.splide) {
      mainRef.current.sync(thumbsRef.current.splide);
    }
  }, []);

  const mainOptions = {
    type: "loop",
    perPage: 1,
    arrows: false,
    pagination: false,
  };

  const thumbsOptions = {
    type: "slide",
    rewind: true,
    isNavigation: true,
    arrows: false,
    pagination: false,
    fixedWidth: "calc((100% / 5) - 8px)",
    fixedHeight: 158,
    gap: "1rem",
    cover: true,
  };

  const { data, isLoading } = useQuery(["aboutApi"], aboutApi, {
    refetchOnWindowFocus: false,
  });

  return (
    <div className="about">
      <Title title={t("bizkimik")} />
      <Container>
        <div className="about__wrapper">
          <Menu />
          <div className="about__info">
            <Splide options={mainOptions} ref={mainRef}>
              {isLoading === false &&
                data !== undefined &&
                data.data.images.map((item) => (
                  <SplideSlide key={item.id}>
                    <img src={item.image} alt={data.data.title + item.id} />
                  </SplideSlide>
                ))}
            </Splide>

            <Splide options={thumbsOptions} ref={thumbsRef}>
              {isLoading === false &&
                data !== undefined &&
                data.data.images.map((item) => (
                  <SplideSlide key={item.id}>
                    <img src={item.image} alt={data.data.title + item.id} />
                  </SplideSlide>
                ))}
            </Splide>
            <div className="about__text">
              {isLoading === false &&
                data !== undefined &&
                renderHtml(data.data.description)}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
