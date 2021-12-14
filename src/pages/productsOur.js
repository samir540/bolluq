import React, { useState, useRef } from "react";
import { Row, Col, Container } from "reactstrap";
import { useParams, useHistory } from "react-router-dom";
import Title from "../components/title/title";
import ProductsMenu from "../components/menu/productsMenu";
import CustomPagination from "../components/pagination/pagination";
import FancyBox from "../components/fancyBox/fancyBox";
import { useQuery } from "react-query";
import { ourBrands } from "../queries/queries";
import ReactFancyBox from "react-fancybox";

// css
import "react-fancybox/lib/fancybox.css";
import "../assets/css/_products.scss";
import { Link } from "react-router-dom";

const Products = () => {
  const [page, setPage] = useState(0);
  const totalRef = useRef(null);
  const { slug } = useParams();

  const { data, isLoading } = useQuery(
    ["ourBrands", slug !== undefined ? "/" + slug : "", page],
    ourBrands,
    {
      refetchOnWindowFocus: false,
      onSuccess: function (succ) {
        totalRef.current = succ.meta;
      },
    }
  );

  return (
    <div className="products">
      <Title title={"MƏHSULLAR"} />
      <Container>
        <FancyBox options={{ infinite: false }}>
          <div className="products__wrapper">
            <ProductsMenu type="our-products" data={data} />
            <div className="products__info">
              <Row>
                {isLoading === false &&
                  data !== undefined &&
                  data.data.map((item, index) => (
                    <Col lg="4" key={index}>
                      <div className="productSlider__items">
                        <div className="productSlider__items--img">
                          <ReactFancyBox
                            thumbnail={item.image}
                            image={item.galleryImage}
                          />
                        </div>
                        <div className="productSlider__items--info">
                          <Link to={`/products-detail/${item.slug}`}>
                            <h2>{item.title}</h2>
                          </Link>
                          <p>
                            <span>Çəki</span>
                            <span>{item.weight}</span>
                          </p>
                          <p>
                            <span>Qablaşdırma</span>
                            <span>{item.packaging}</span>
                          </p>
                          <p>
                            <span>Kod</span>
                            <span>{item.code}</span>
                          </p>
                        </div>
                      </div>
                    </Col>
                  ))}
              </Row>
              <div className="d-flex justify-content-center">
                {totalRef.current !== null &&
                  totalRef.current.total > totalRef.current.per_page && (
                    <CustomPagination
                      defaultCurrent={1}
                      total={totalRef.current.total}
                      pageSize={totalRef.current.per_page}
                      setPage={setPage}
                    />
                  )}
              </div>
            </div>
          </div>
        </FancyBox>
      </Container>
    </div>
  );
};

export default Products;
