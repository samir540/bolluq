import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "../assets/css/_homePage.scss";
import { Container } from "reactstrap";
import ProductSlider from "../components/sliders/productSlider";
import MultiSlider from "../components/sliders/multiSlider";
import NewsSlider from "../components/sliders/newsSlider";
import { useQueries } from "react-query";
import {
  certificates,
  homePageSliderProducts,
  homePageTopSlider,
  newsApi,
  partners,
  statistics,
} from "../queries/queries";

const HomePage = () => {
  const results = useQueries([
    {
      queryKey: ["statistics"],
      queryFn: statistics,
      refetchOnWindowFocus: false,
    },
    {
      queryKey: ["certifcates"],
      queryFn: certificates,
      refetchOnWindowFocus: false,
    },
    { queryKey: ["newsApi"], queryFn: newsApi, refetchOnWindowFocus: false },
    { queryKey: ["partnyors"], queryFn: partners, refetchOnWindowFocus: false },
    {
      queryKey: ["homePageTopSlider"],
      queryFn: homePageTopSlider,
      refetchOnWindowFocus: false,
    },
    {
      queryKey: ["homePageSliderProducts"],
      queryFn: homePageSliderProducts,
      refetchOnWindowFocus: false,
    },
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
          {results[4].isLoading === false &&
            results[4].data !== undefined &&
            results[4].data.data.map((item) => (
              <SplideSlide key={item.id}>
                <img src={item.image} alt={item.id} />
              </SplideSlide>
            ))}
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
        {results[5].isLoading === false && results[5].data !== undefined && (
          <ProductSlider items={results[5].data} />
        )}
        {results[1].isLoading === false && results[1].data !== undefined && (
          <MultiSlider items={results[1].data} title={"Sertifikatlar"} />
        )}
        {results[2].isLoading === false && results[2].data !== undefined && (
          <NewsSlider items={results[2].data} title={"Xəbərlər"} />
        )}
        {results[3].isLoading === false && results[3].data !== undefined && (
          <MultiSlider
            items={results[3].data}
            title={"Partnyorlar"}
            id={"endMultiSlider"}
          />
        )}
      </Container>
    </div>
  );
};

export default HomePage;
