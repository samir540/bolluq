import React from "react";
import PropTypes from "prop-types";

const Title = ({ title }) => {
  return (
    <div className="layerTitle">
      <h1>{title}</h1>
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default React.memo(Title);
