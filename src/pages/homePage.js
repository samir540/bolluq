import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "../assets/css/_homePage.scss";
import { Container } from "reactstrap";
import ProductSlider from "../components/sliders/productSlider";
import MultiSlider from "../components/sliders/multiSlider";
import NewsSlider from "../components/sliders/newsSlider";

const HomePage = () => {
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
          <div className="homePage__count--item d-flex justify-content-center align-items-center flex-column">
            <p>
              <svg
                width={34}
                height={34}
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30.2222 30.2222V1.88889H22.6667V0H3.77778V30.2222H0V34H22.6667V5.66667H26.4444V34H34V30.2222H30.2222ZM18.8889 30.2222H7.55556V3.77778H18.8889V30.2222ZM13.2222 15.1111H17V18.8889H13.2222V15.1111Z"
                  fill="white"
                />
              </svg>
            </p>
            <p>Ofis sayı</p>
            <p>20</p>
          </div>

          <div className="homePage__count--item d-flex justify-content-center align-items-center flex-column">
            <p>
              <svg
                width={36}
                height={30}
                viewBox="0 0 36 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M32.7273 0H3.27273C1.47273 0 0 1.5 0 3.33333V26.6667C0 28.5 1.47273 30 3.27273 30H32.7273C34.5273 30 36 28.5 36 26.6667V3.33333C36 1.5 34.5273 0 32.7273 0ZM32.7273 26.6667H3.27273V3.33333H32.7273V26.6667ZM16.3636 15H31.0909V25H16.3636V15Z"
                  fill="white"
                />
              </svg>
            </p>
            <p>Marka sayı</p>
            <p>30+</p>
          </div>

          <div className="homePage__count--item d-flex justify-content-center align-items-center flex-column">
            <p>
              <svg
                width={39}
                height={29}
                viewBox="0 0 39 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.3015 16.8207C29.6884 18.4569 31.3609 20.6737 31.3609 23.6295V28.9076H38.33V23.6295C38.33 19.794 32.1101 17.5244 27.3015 16.8207Z"
                  fill="white"
                />
                <path
                  d="M24.3918 14.8326C28.2422 14.8326 31.3609 11.6833 31.3609 7.79507C31.3609 3.90685 28.2422 0.757568 24.3918 0.757568C23.5729 0.757568 22.8063 0.933505 22.0746 1.17982C23.5207 2.99197 24.3918 5.29676 24.3918 7.79507C24.3918 10.2934 23.5207 12.5982 22.0746 14.4103C22.8063 14.6566 23.5729 14.8326 24.3918 14.8326Z"
                  fill="white"
                />
                <path
                  d="M13.9382 14.8326C17.7886 14.8326 20.9073 11.6833 20.9073 7.79507C20.9073 3.90685 17.7886 0.757568 13.9382 0.757568C10.0878 0.757568 6.96912 3.90685 6.96912 7.79507C6.96912 11.6833 10.0878 14.8326 13.9382 14.8326ZM13.9382 4.27632C15.8547 4.27632 17.4228 5.85976 17.4228 7.79507C17.4228 9.73038 15.8547 11.3138 13.9382 11.3138C12.0217 11.3138 10.4537 9.73038 10.4537 7.79507C10.4537 5.85976 12.0217 4.27632 13.9382 4.27632Z"
                  fill="white"
                />
                <path
                  d="M13.9382 16.5919C9.28631 16.5919 0 18.9495 0 23.6294V28.9076H27.8764V23.6294C27.8764 18.9495 18.59 16.5919 13.9382 16.5919ZM24.3918 25.3888H3.48454V23.647C3.833 22.3803 9.23404 20.1107 13.9382 20.1107C18.6423 20.1107 24.0434 22.3803 24.3918 23.6294V25.3888Z"
                  fill="white"
                />
              </svg>
            </p>
            <p>Ofis sayı</p>
            <p>50+</p>
          </div>
          <div className="homePage__count--item d-flex justify-content-center align-items-center flex-column">
            <p>
              <svg
                width={32}
                height={40}
                viewBox="0 0 32 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 20C13.8 20 12 18.2 12 16C12 13.8 13.8 12 16 12C18.2 12 20 13.8 20 16C20 18.2 18.2 20 16 20ZM28 16.4C28 9.14 22.7 4 16 4C9.3 4 4 9.14 4 16.4C4 21.08 7.9 27.28 16 34.68C24.1 27.28 28 21.08 28 16.4ZM16 0C24.4 0 32 6.44 32 16.4C32 23.04 26.66 30.9 16 40C5.34 30.9 0 23.04 0 16.4C0 6.44 7.6 0 16 0Z"
                  fill="white"
                />
              </svg>
            </p>
            <p>Satış nöqtəsi sayı</p>
            <p>20+</p>
          </div>
          <div className="homePage__count--item d-flex justify-content-center align-items-center flex-column">
            <p>
              <svg
                width={40}
                height={40}
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.98 0C8.94 0 0 8.96 0 20C0 31.04 8.94 40 19.98 40C31.04 40 40 31.04 40 20C40 8.96 31.04 0 19.98 0ZM33.84 12H27.94C27.3 9.5 26.38 7.1 25.18 4.88C28.86 6.14 31.92 8.7 33.84 12ZM20 4.08C21.66 6.48 22.96 9.14 23.82 12H16.18C17.04 9.14 18.34 6.48 20 4.08ZM4.52 24C4.2 22.72 4 21.38 4 20C4 18.62 4.2 17.28 4.52 16H11.28C11.12 17.32 11 18.64 11 20C11 21.36 11.12 22.68 11.28 24H4.52ZM6.16 28H12.06C12.7 30.5 13.62 32.9 14.82 35.12C11.14 33.86 8.08 31.32 6.16 28ZM12.06 12H6.16C8.08 8.68 11.14 6.14 14.82 4.88C13.62 7.1 12.7 9.5 12.06 12ZM20 35.92C18.34 33.52 17.04 30.86 16.18 28H23.82C22.96 30.86 21.66 33.52 20 35.92ZM24.68 24H15.32C15.14 22.68 15 21.36 15 20C15 18.64 15.14 17.3 15.32 16H24.68C24.86 17.3 25 18.64 25 20C25 21.36 24.86 22.68 24.68 24ZM25.18 35.12C26.38 32.9 27.3 30.5 27.94 28H33.84C31.92 31.3 28.86 33.86 25.18 35.12ZM28.72 24C28.88 22.68 29 21.36 29 20C29 18.64 28.88 17.32 28.72 16H35.48C35.8 17.28 36 18.62 36 20C36 21.38 35.8 22.72 35.48 24H28.72Z"
                  fill="white"
                />
              </svg>
            </p>
            <p>Dünyaya ixrac sayı</p>
            <p>20+</p>
          </div>
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
