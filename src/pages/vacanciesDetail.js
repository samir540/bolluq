import React from "react";
import { Container } from "reactstrap";
import HRMenu from "../components/menu/humanResurcesMenu";
// css
import "../assets/css/_vacanciesDetails.scss";
import Title from "../components/title/title";
import { useQuery } from "react-query";
import { vacanciesDetail } from "../queries/queries";
import { useParams, withRouter } from "react-router";
import renderHTML from "react-render-html";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const VacanciesDetails = () => {
  const { slug } = useParams();
  const { t } = useTranslation();

  const { data, isLoading } = useQuery(
    ["vacanciesDetail", slug],
    vacanciesDetail
  );

  return (
    <>
      <Title title={t("insanresurslari")} />
      <Container>
        <div className="vacancyDetails d-flex flex-row justify-content-between">
          <HRMenu />
          <div className="vacancyDetails__content d-flex flex-column">
            {isLoading === false && data !== undefined && (
              <>
                <div className="vacancyDetails__content__offers d-flex flex-row">
                  <div className="vacancyDetails__content__offers__head">
                    <h4>{t("telebler")}:</h4>
                  </div>
                  <div className="vacancyDetails__content__offers__text">
                    {renderHTML(data.data.responsibility)}
                  </div>
                </div>
                <div className="vacancyDetails__content__responsibilities d-flex flex-row">
                  <div className="vacancyDetails__content__responsibilities__head">
                    <h4>{t("vezifeohdelikleri")}:</h4>
                  </div>
                  <div className="vacancyDetails__content__responsibilities__text">
                    {renderHTML(data.data.requirement)}
                  </div>
                </div>
                <div className="vacancyDetails__content__services d-flex flex-row">
                  <div className="vacancyDetails__content__services__head">
                    <h4>{t("teminatlar")}:</h4>
                  </div>
                  <div className="vacancyDetails__content__services__text">
                    {renderHTML(data.data.description)}
                  </div>
                </div>
              </>
            )}
            <div className="vacancyDetails__btn-send d-flex flex-row justify-content-start">
              <button>
                <Link to={`/form/${slug}`}>{t("cvgonder")}</Link>
              </button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default withRouter(VacanciesDetails);
