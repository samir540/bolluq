import React from "react";
import { Container } from "reactstrap";
import HumanResurcesMenu from "../components/menu/humanResurcesMenu";
import "../assets/css/_humanResurcers.scss";
import Title from "../components/title/title";

const InternShip = () => {
  return (
    <>
      <Title title={"İNSAN RESURSLARI"} />
      <Container>
        <div className="humansResurces">
          <HumanResurcesMenu />
          <div className="humansResurces__info">
            <img
              src={require("../assets/images/content.jfif").default}
              alt=""
            />
            <p>
              Bolluq LTD MMC 1993-cü ildə topdansatış mərkəzi kimi fəaliyyətə
              ansatış mərkəzi kimi fəaliyyətəansatış mərkə fəaliyyətə
              başlamışdır.Qısa zaman ərzində istehsal fabrikləri və peşəkar
              satış-marketinq orqanizasionuiqida sek runda adı sayılan bir
              istehsal- düstürübütor şirkəti halına gəlmişdir. Peşəkar
              istehsalat-marketinq və satış koma daları ilə Azərbaycan bazarında
              istehsal etdiyi və düstürübütoru olduğu şirkətlərin məhsullarını
              ölkəmizin bütü gələrinə-rayon ə qəsəbələrinə,hətta ucqar
              kəndlərinə belə çox rahat şəkildə çatdırmadadır. Bolluq LTD MMC ya
              dığı gündən Dünyanın müxtəlif ölkələrindən olan bir çox firmalarla
              əməkdaşlıq edir. Gürcüstan,Qazaxıstan, Tac stan və s.. ölkələrə
              məsullarını ixrac etməkdədir.Qarşısına Dünya azarında daha geniş
              mövqeyə sahib olmağı m səd qoymuşdur. Missiyamız-Azərbaycan bazarı
              geniş mövqeyə sahib olmağı məqsəd qoymuşdur. Missiyamız- baycan
              bazarı ğı məqsəd qoymuşdur. Missiyamız-Azərbaycan bazarığı məqsəd
              qoymuşdur. Missiyamız-Azərbay can bazarı ğı məqsəd qoymuşdur.
              Missiyamız-Azərbaycan bazarı Missiyamız-Azərbaycan bazarı ğı
              məqsəd qoy muşdur. Missiyamız-Azərbaycan bazarı
              Missiyamız-Azərbaycan bazarı ğı məqsəd qoymuşdur. Missiyamız-Azərb
              can bazarı Missiyamız-Azərbaycan bazarı ğı məqsəd qoymuşdur.
              Missiyamız-Azərbaycan bazarı Missiyamız-Azər baycan bazarı ğı
              məqsəd qoymuşdur. Missiyam baycan bazarı ğı məqsəd qoymuşdur.
              Missiyam baycan bazarı məqsəd qoymuşdur. Missiyam baycan bazarı ğı
              məqsəd qoymuşdur. Missiyambaycan bazarı ğı məqsəd qoym.
            </p>
          </div>
        </div>
        <div className="humansResurces__items">
          <p>
            <img src={require("../assets/images/1.svg").default} alt="" />
            <span> Yüksələn karyera</span>
          </p>
          <p>
            <img src={require("../assets/images/2.svg")} />
            <span>Yeniliklər</span>
          </p>
        </div>
      </Container>
    </>
  );
};

export default InternShip;
