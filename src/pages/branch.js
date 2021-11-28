import React, { useEffect, useRef, useState } from "react";
import { Container } from "reactstrap";
import Title from "../components/title/title";
import { changeMapLocations } from "../helper/helper";
import { useQuery } from "react-query";
import renderHTML from "react-render-html";

// css
import "../assets/css/_branch.scss";
import { branches, branchesDescription } from "../queries/queries";

const Branch = () => {
  const [name, setName] = useState("merkez");

  const btnRef = useRef([]);

  const spanRefEast = useRef([]);

  const spanRefWest = useRef([]);

  const { data, isLoading } = useQuery(["branches"], branches);

  const branchesDetail = useQuery(
    ["branchesDescription", name],
    branchesDescription
  );

  useEffect(() => {
    if (isLoading === false)
      changeMapLocations(btnRef, spanRefEast, spanRefWest);
  }, [isLoading]);

  return (
    <div className="branch">
      <Title title={"FİLİALLAR"} />
      <Container>
        <div className="branch__wrapper">
          <div className="branch__map">
            <img src={require(`../assets/images/${name}.svg`).default} alt="" />
          </div>
          <div className="branch__content">
            <div className="branch__content--left">
              {isLoading === false &&
                data !== undefined &&
                data.data.map((item, index) => (
                  <React.Fragment key={item.id}>
                    <button
                      onClick={() => {
                        setName(item.keyword);
                      }}
                      ref={(e) => (btnRef.current[index] = e)}
                    >
                      {item.title}
                    </button>
                    {index === 1 &&
                      item.children.map((child, childIndex) => (
                        <span
                          key={child.id}
                          onClick={() => {
                            setName(child.keyword);
                          }}
                          ref={(e) => (spanRefEast.current[childIndex] = e)}
                        >
                          {child.title}
                        </span>
                      ))}
                    {index === 2 &&
                      item.children.map((child, childIndex) => (
                        <span
                          key={child.id}
                          onClick={() => {
                            setName(child.keyword);
                          }}
                          ref={(e) => (spanRefWest.current[childIndex] = e)}
                        >
                          {child.title}
                        </span>
                      ))}
                  </React.Fragment>
                ))}
            </div>
            <div className="branch__content--right">
              22
              {branchesDetail.isLoading === false &&
              branchesDetail.data !== undefined
                ? renderHTML(branchesDetail.data.data.description)
                : ""}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Branch;
