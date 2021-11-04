import React from "react";
import { connect } from "react-redux";

const Header = ({ count }) => {
  return <header className="header"></header>;
};

export default connect()(React.memo(Header));
