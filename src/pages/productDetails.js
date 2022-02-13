import React, { useRef, useEffect } from "react";
import { Container } from "reactstrap";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "../assets/css/_productDetails.scss";
import Title from "../components/title/title";
import { useQuery } from "react-query";
import { productDetail } from "../queries/queries";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ProductDetails = () => {
  const { slug } = useParams();
  const {t} = useTranslation();

  const { data, isLoading } = useQuery(
    ["productDetail", slug !== undefined ? slug : ""],
    productDetail,
    {
      refetchOnWindowFocus: false,
    }
  );

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
    fixedHeight: 70,
    gap: "1rem",
    cover: true,
  };

  return (
    <>
      <Title title={t("mehsullar")} />
      <div className="productDetails">
        <Container>
          <div className="productDetails__wrapper d-flex flex-row">
            <div className="productDetails__wrapper--slider">
              <Splide options={mainOptions} ref={mainRef}>
                {isLoading === false &&
                  data !== undefined &&
                  data.length !== 0 &&
                  data.data.images.map((item) => (
                    <SplideSlide key={item.id}>
                      <img src={item.image} />
                    </SplideSlide>
                  ))}
              </Splide>
              <Splide options={thumbsOptions} ref={thumbsRef}>
                {isLoading === false &&
                  data !== undefined &&
                  data.length !== 0 &&
                  data.data.images.map((item) => (
                    <SplideSlide key={item.id}>
                      <img src={item.image} />
                    </SplideSlide>
                  ))}
              </Splide>
            </div>
            <div className="productDetails__wrapper--product-details d-flex flex-column">
              {isLoading === false && data !== undefined && data.length !== 0 && (
                <>
                  <h4>{data.data.title}</h4>
                  <div className="productDetails__wrapper--product-details--content d-flex flex-row">
                    <div>
                      <p>{t("ceki")}</p>
                      <p>{t("qablasdirma")}</p>
                      <p>{t("kod")}</p>
                    </div>
                    <div className="">
                      <p>{data.data.weight}</p>
                      <p>{data.data.packaging}</p>
                      <p>{data.data.code}</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ProductDetails;
