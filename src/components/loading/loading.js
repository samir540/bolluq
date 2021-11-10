import React from "react";

// css
import "../../assets/css/_loading.scss";

const Loading = () => {
  return (
    <div className="loading">
      <div id="loading-bar-spinner" className="spinner">
        <div className="spinner-icon" />
      </div>
    </div>
  );
};

export default Loading;
