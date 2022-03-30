import React from "react";
import PropTypes from "prop-types";
import { Pagination } from "antd";

const CustomPagination = ({ total, defaultCurrent,current, pageSize, setPage }) => {
  return (
    <Pagination
      onChange={(e) => setPage(e)}
      showSizeChanger={false}
      showLessItems={false}
      pageSize={pageSize}
      defaultCurrent={defaultCurrent}
      total={total}
      current={current}
    />
  );
};

CustomPagination.propTypes = {
  setPage: PropTypes.func.isRequired,
};

export default React.memo(CustomPagination);
