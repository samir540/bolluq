import React from "react";
import Menu from "../components/menu/menu";
import { Container } from "reactstrap";
import "../assets/css/_productionsDetails.scss";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import { newsDetailApi } from "../queries/queries";
import renderHtml from "react-render-html";

const NewsDetail = ({ lang }) => {
  const { id } = useParams();

  const { data, isLoading } = useQuery(["newsDetail", id], newsDetailApi, {
    refetchOnWindowFocus: false,
  });

  return (
    <div className="newsDetail">
      <div className="productionsDetails">
        <Container>
          <div className="d-flex">
            <Menu lang={lang} />
            {isLoading === false && data.data !== undefined && (
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
      </div>
    </div>
  );
};

export default NewsDetail;
