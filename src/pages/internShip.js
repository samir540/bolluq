import React from "react";
import { Container } from "reactstrap";
import HumanResurcesMenu from "../components/menu/humanResurcesMenu";
import "../assets/css/_humanResurcers.scss";
import Title from "../components/title/title";
import { useQuery } from "react-query";
import { internship } from "../queries/queries";
import renderHTML from "react-render-html";

const InternShip = () => {
  const { data, isLoading } = useQuery(["internShip"], internship);

  return (
    <>
      <Title title={"İNSAN RESURSLARI"} />
      <Container>
        <div className="humansResurces">
          <HumanResurcesMenu />
          {isLoading === false && data !== undefined && data.data.length !== 0 && (
            <div className="humansResurces__info">
              <img src={data.data.image} alt="" />
              {renderHTML(data.data.description)}
            </div>
          )}
        </div>
        <div className="humansResurces__items">
          {[1, 2, 3, 4].map((item) => (
            <p key={item}>
              <img src={require("../assets/images/1.svg").default} alt="" />
              <span> Yüksələn karyera</span>
            </p>
          ))}
        </div>
      </Container>
    </>
  );
};

export default InternShip;
