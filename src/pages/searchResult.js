import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { useQuery } from "react-query";
import { search } from "../queries/queries";
import Title from "../components/title/title";
import { useTranslation } from "react-i18next";


function useQueryData() {
  return new URLSearchParams(useLocation().search);
}

const SearchResult = ({ searchState, dispatchSearch }) => {
  // vacancy search url
  let query = useQueryData();
  const { t } = useTranslation();


  useEffect(() => {
    dispatchSearch(query.get("query"));
  }, []);

  const { data, isLoading } = useQuery(
    ["search", searchState],
    searchState !== null ? search : ""
  );

  return (
    <>
      <Title title={t("mehsullar")} />
      <div className="searchResult">
        <Container>
          <Row>
            {isLoading === false &&
              data !== undefined &&
              data.data.length !== 0 &&
              data.data.map((item) => (
                <Col lg="4">
                  <div className="productSlider__items">
                    <div className="productSlider__items--img">
                      <img
                        data-fancybox="gallery"
                        data-src={item.image}
                        src={item.image}
                        alt={item.title}
                      />
                    </div>
                    <div className="productSlider__items--info">
                      <Link to={`/products-detail/${item.slug}`}>
                        <h2>{item.title}</h2>
                      </Link>
                      <p>
                        <span>{t("ceki")}</span>
                        <span>{item.weight}</span>
                      </p>
                      <p>
                        <span>{t("qablasdirma")}</span>
                        <span>{item.packaging}</span>
                      </p>
                      <p>
                        <span>{t("kod")}</span>
                        <span>{item.code}</span>
                      </p>
                    </div>
                  </div>
                </Col>
              ))}
            {isLoading === false &&
              data !== undefined &&
              data.data.length === 0 && (
                <p className="notFoundProducts">
                  {t("axtardiginiz netice tapilmadi")}
                  
                </p>
              )}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default connect(
  (state) => ({
    searchState: state.searchState,
  }),
  (dispatch) => ({
    dispatchSearch: (val) => dispatch.searchState.dispatchSearch(val),
  })
)(SearchResult);
