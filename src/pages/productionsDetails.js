import React from "react";
import { Container } from "reactstrap";
import Menu from "../components/menu/menu";
import "../assets/css/_productionsDetails.scss";
import { useQuery } from "react-query";
import { productionDetail } from "../queries/queries";
import { useParams } from "react-router";
import renderHtml from "react-render-html";
import Title from "../components/title/title";
import {useTranslation} from "react-i18next";

const ProductionsDetails = () => {
  const { slug } = useParams();
  const {t} = useTranslation();

  const { data, isLoading } = useQuery(
    ["productionDetail", slug],
    productionDetail,
    {
      refetchOnWindowFocus: false,
    }
  );

  return (
    <>
      <Title title={t("bizkimik")}/>
      <section className="productionsDetails">
        <Container>
          <div className="d-flex">
            <Menu />
            {isLoading === false && data !== undefined && (
              <div className="productionsDetails__wrapper">
                <div className="productionsDetails__wrapper__item d-flex justify-content-center align-items-center flex-column">
                  <img src={data.data.image} alt="Koroglu_Fabriki" />
                  <div className="productionsDetails__wrapper__item--content">
                    <h2>{data.data.title}</h2>
                    {renderHtml(data.data.description)}
                  </div>
                </div>
              </div>
            )}
          </div>
        </Container>
      </section>
    </>
  );
};

export default ProductionsDetails;
