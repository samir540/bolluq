import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "../assets/css/_homePage.scss";
import { Container } from "reactstrap";
import ProductSlider from "../components/sliders/productSlider";
import MultiSlider from "../components/sliders/multiSlider";
import NewsSlider from "../components/sliders/newsSlider";
import { useQueries } from "react-query";
import { statistics } from "../queries/queries";

const HomePage = () => {
  const results = useQueries([
    { queryKey: ["statistics"], queryFn: statistics },
  ]);

  return (
    <div className="homePage">
      <div className="homePage__slider">
        <div className="homePage__sliderLayout"></div>
        <Splide
          options={{
            type: "loop",
          }}
        >
          <SplideSlide>
            <img src={require("../assets/images/cookie.jfif").default} alt="" />
          </SplideSlide>
          <SplideSlide>
            <img src={require("../assets/images/cookie.jfif").default} alt="" />
          </SplideSlide>
          <SplideSlide>
            <img src={require("../assets/images/cookie.jfif").default} alt="" />
          </SplideSlide>
        </Splide>
      </div>
      <Container>
        <div className="homePage__count d-flex align-items-center">
          {results[0].isLoading === false &&
            results[0].data !== undefined &&
            results[0].data.data.map((item) => (
              <div
                key={item.id}
                className="homePage__count--item d-flex justify-content-center align-items-center flex-column"
              >
                <p>
                  <img src={item.image} alt={item.title} />
                </p>
                <p>{item.title}</p>
                <p>{item.count}</p>
              </div>
            ))}
        </div>
        <ProductSlider items={[1, 2, 3, 4]} />
        <MultiSlider items={[1, 2, 3, 4]} title={"Sertifikatlar"} />
        <NewsSlider items={[1, 2, 3]} title={"Xəbərlər"} />
        <MultiSlider
          items={[1, 2, 3, 4]}
          title={"Partnyorlar"}
          id={"endMultiSlider"}
        />
      </Container>
    </div>
  );
};

export default HomePage;
