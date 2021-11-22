import React, { useState } from "react";
import { Row, Col, Container } from "reactstrap";
import Title from "../components/title/title";
import ProductsMenu from "../components/menu/productsMenu";
import CustomPagination from "../components/pagination/pagination";
import FancyBox from "../components/fancyBox/fancyBox";

// css
import "../assets/css/_products.scss";

const Products = () => {
  const [page, setPage] = useState(0);

  const [id, setId] = useState([]);

  return (
    <div className="products">
      <Title title={"MƏHSULLAR"} />
      <Container>
        <FancyBox options={{ infinite: false }}>
          <div className="products__wrapper">
            <ProductsMenu setId={setId} id={id} />
            <div className="products__info">
              <Row>
                {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
                  <Col lg="4" key={index}>
                    <div className="productSlider__items">
                      <div className="productSlider__items--img">
                        <img
                          data-fancybox="gallery"
                          data-src={require("../assets/images/cap.png").default}
                          src={require("../assets/images/cap.png").default}
                          alt={item}
                        />
                      </div>
                      <div className="productSlider__items--info">
                        <h2>“Capella’’ gavalılı</h2>
                        <p>
                          <span>Çəki</span>
                          <span>1kq</span>
                        </p>
                        <p>
                          <span>Qablaşdırma</span>
                          <span>1 X {item}</span>
                        </p>
                        <p>
                          <span>Kod</span>
                          <span>002540</span>
                        </p>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
              <div className="d-flex justify-content-center">
                <CustomPagination
                  defaultCurrent={1}
                  total={50}
                  pageSize={10}
                  setPage={setPage}
                />
              </div>
            </div>
          </div>
        </FancyBox>
      </Container>
    </div>
  );
};

export default Products;
