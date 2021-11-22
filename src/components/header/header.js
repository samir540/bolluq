import React, { useRef } from "react";
import { connect } from "react-redux";
import { Container } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "../../assets/css/_header.scss";

const Header = ({ headerId }) => {
  const searchRef = useRef();

  return (
    <header className="header" id={headerId}>
      <div className="header__search" ref={searchRef}>
        <div className="header__search--item">
          <img
            src={require("../../assets/images/close.svg").default}
            alt="close"
            onClick={() => {
              searchRef.current.style.display = "none";
            }}
          />
          <input type="search" placeholder="Axtar..." />
          <svg
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.2967 16.9811H18.0772L17.6449 16.5643C19.1578 14.8045 20.0686 12.5197 20.0686 10.0343C20.0686 4.49228 15.5763 0 10.0343 0C4.49228 0 0 4.49228 0 10.0343C0 15.5763 4.49228 20.0686 10.0343 20.0686C12.5197 20.0686 14.8045 19.1578 16.5643 17.6449L16.9811 18.0772V19.2967L24.6998 27L27 24.6998L19.2967 16.9811ZM10.0343 16.9811C6.19039 16.9811 3.08748 13.8782 3.08748 10.0343C3.08748 6.19039 6.19039 3.08748 10.0343 3.08748C13.8782 3.08748 16.9811 6.19039 16.9811 10.0343C16.9811 13.8782 13.8782 16.9811 10.0343 16.9811Z"
              fill="white"
              fillOpacity="0.62"
            />
          </svg>
        </div>
      </div>
      <Container>
        <div className="d-flex justify-content-between align-items-center">
          <div className="header__logo">
            <Link to={`/`}>
              <img
                className="img-fluid"
                src={require("../../assets/images/logo.png").default}
                alt=""
              />
            </Link>
          </div>
          <div className="header__nav">
            <nav>
              <NavLink to={`/about`} className="header__nav--item">
                BİZ KİMİK
              </NavLink>
              <NavLink to={`/branch`} className="header__nav--item">
                FİLİALLAR
              </NavLink>
              <NavLink
                to={`/products/our-products`}
                className="header__nav--item"
              >
                MEHSULLAR
              </NavLink>
              <NavLink to={`/internship`} className="header__nav--item">
                İNSAN RESURSLARI
              </NavLink>
              <NavLink to={`/export`} className="header__nav--item">
                EXPORT
              </NavLink>
              <NavLink to={`/catalogs`} className="header__nav--item">
                KATALOQ
              </NavLink>
              <NavLink to={`/contact`} className="header__nav--item">
                ƏLAQƏ
              </NavLink>
            </nav>
          </div>
          <div className="header__langBox d-flex align-items-center">
            <div className="header__langBox--search">
              <button
                onClick={() => {
                  searchRef.current.style.display = "flex";
                }}
              >
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"
                    fill="black"
                    fillOpacity="0.69"
                  />
                </svg>
              </button>
            </div>
            <div className="header__langBox--multiLang d-flex align-items-center justify-content-center flex-column">
              <button className="az">
                AZ
                <svg
                  width={10}
                  height={6}
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 1L5 5L9 1" stroke="black" strokeOpacity="0.69" />
                </svg>
              </button>
              <div className="header__langBox--multiBox">
                <button className="en">EN</button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default connect()(React.memo(Header));
