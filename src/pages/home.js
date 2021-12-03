import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "../assets/css/_homePage.scss";
import { Container } from "reactstrap";
import ProductSlider from "../components/sliders/productSlider";
import MultiSlider from "../components/sliders/multiSlider";
import NewsSlider from "../components/sliders/newsSlider";
import { useQuery } from "react-query";
import Title from "../title/title";
import { useTranslation } from "react-i18next";
import { init } from "../queries/queries";
import CountUp from "react-countup";

const HomePage = () => {
  const { t } = useTranslation();

  const { data, isLoading } = useQuery(["init", ""], init, {
    refetchOnWindowFocus: false,
  });

  return (
    <div className="homePage">
      <Title>
        <title>Bolluq</title>
      </Title>
      <div className="homePage__slider">
        <div className="homePage__sliderLayout"></div>
        <Splide
          options={{
            type: "loop",
          }}
        >
          {isLoading === false &&
            data !== undefined &&
            data.sliders.map((item) => (
              <SplideSlide key={item.id}>
                <img src={item.image} alt={item.id} />
              </SplideSlide>
            ))}
        </Splide>
      </div>
      <Container>
        <div className="homePage__count d-flex align-items-center">
          {isLoading === false &&
            data !== undefined &&
            data.statistics.map((item) => (
              <div
                key={item.id}
                className="homePage__count--item d-flex justify-content-center align-items-center flex-column"
              >
                <p>
                  <img src={item.image} alt={item.title} />
                </p>
                <p>{item.title}</p>
                <p>
                  <CountUp end={item.count} duration={2} />{" "}
                  {item.increment && "+"}
                </p>
              </div>
            ))}
        </div>
        {isLoading === false && data !== undefined && data.products && (
          <ProductSlider items={data.products} />
        )}
        {isLoading === false && data !== undefined && data.certificates && (
          <MultiSlider items={data.certificates} title={"Sertifikatlar"} />
        )}
        {isLoading === false && data !== undefined && data.news && (
          <NewsSlider items={data.news} title={"Xəbərlər"} />
        )}
        {isLoading === false && data !== undefined && (
          <MultiSlider
            items={data.partners}
            title={"Partnyorlar"}
            id={"endMultiSlider"}
          />
        )}
      </Container>
    </div>
  );
};

export default HomePage;
