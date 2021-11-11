import React, { useEffect, useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Title from "../components/title/title";
import Menu from "../components/menu/menu";

// css
import "../assets/css/_about.scss";
import { Container } from "reactstrap";

const About = () => {
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

  return (
    <div className="about">
      <Title title={"BİZ KİMİK"} />
      <Container>
        <div className="about__wrapper">
          <Menu />
          <div className="about__info">
            <Splide options={mainOptions} ref={mainRef}>
              {[1, 2, 3, 4, 5].map((item, index) => (
                <SplideSlide key={item}>
                  <img
                    src={require("../assets/images/x.jfif").default}
                    alt={""}
                  />
                </SplideSlide>
              ))}
            </Splide>

            <Splide options={thumbsOptions} ref={thumbsRef}>
              {[1, 2, 3, 4, 5].map((item, index) => (
                <SplideSlide key={item}>
                  <img
                    src={require("../assets/images/x.jfif").default}
                    alt={""}
                  />
                </SplideSlide>
              ))}
            </Splide>
            <div className="about__text">
              <p>
                Bolluq LTD MMC 1993-cü ildə topdansatış mərkəzi kimi fəaliyyətə
                ansatış mərkəzi kimi fəaliyyətəansatış mərkəzi fəaliyyətə
                başlamışdır.Qısa zaman ərzində istehsal fabrikləri və peşəkar
                satış-marketinq orqanizasionuiqida sekto runda adı sayılan bir
                istehsal- düstürübütor şirkəti halına gəlmişdir. Peşəkar
                istehsalat-marketinq və satış koman daları ilə Azərbaycan
                bazarında istehsal etdiyi və düstürübütoru olduğu şirkətlərin
                məhsullarını ölkəmizin bütün gələrinə-rayon ə qəsəbələrinə,hətta
                ucqar kəndlərinə belə çox rahat şəkildə çatdırmadadır. Bolluq
                LTD MMC yaran dığı gündən Dünyanın müxtəlif ölkələrindən olan
                bir çox firmalarla əməkdaşlıq edir. Gürcüstan,Qazaxıstan, Taciki
                stan və s.. ölkələrə məsullarını ixrac etməkdədir.Qarşısına
                Dünya azarında daha geniş mövqeyə sahib olmağı məq səd
                qoymuşdur. Missiyamız-Azərbaycan bazarı geniş mövqeyə sahib
                olmağı məqsəd qoymuşdur. Missiyamız-Azər baycan bazarı ğı məqsəd
                qoymuşdur. Missiyamız-Azərbaycan bazarığı məqsəd qoymuşdur.
                Missiyamız-Azərbay can bazarı ğı məqsəd qoymuşdur.
                Missiyamız-Azərbaycan bazarı Missiyamız-Azərbaycan bazarı ğı
                məqsəd qoy muşdur. Missiyamız-Azərbaycan bazarı
                Missiyamız-Azərbaycan bazarı ğı məqsəd qoymuşdur.
                Missiyamız-Azərbay can bazarı Missiyamız-Azərbaycan bazarı ğı
                məqsəd qoymuşdur. Missiyamız-Azərbaycan bazarı Missiyamız-Azər
                baycan bazarı ğı məqsəd qoymuşdur. Missiyam baycan bazarı ğı
                məqsəd qoymuşdur. Missiyam baycan bazarı ğı məqsəd qoymuşdur.
                Missiyam baycan bazarı ğı məqsəd qoymuşdur. Missiyambaycan
                bazarı ğı məqsəd qoymuşdur.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
