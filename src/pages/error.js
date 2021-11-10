import React from "react";
import { Link } from "react-router-dom";

// css
import "../assets/css/_error.scss";

const ErrorPage = () => {
  return (
    <div className="errorPage">
      <div className="not-found parallax">
        <div className="sky-bg" />
        <div className="wave-7" />
        <div className="wave-6" />
        <a className="wave-island" href="2#">
          <img
            src="http://res.cloudinary.com/andrewhani/image/upload/v1524501929/404/island.svg"
            alt="Island"
          />
        </a>
        <div className="wave-5" />
        <div className="wave-lost wrp">
          <span>4</span>
          <span>0</span>
          <span>4</span>
        </div>
        <div className="wave-4" />
        <div className="wave-boat">
          <img
            className="boat"
            src="http://res.cloudinary.com/andrewhani/image/upload/v1524501894/404/boat.svg"
            alt="Boat"
          />
        </div>
        <div className="wave-3" />
        <div className="wave-2" />
        <div className="wave-1" />
        <div className="wave-message">
          <p>Page Not Found</p>
          <Link className="wave-link" to="/">Back To Home Page</Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
