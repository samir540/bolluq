import React from "react";
import PropTypes from "prop-types";
import { Pagination } from "antd";

const CustomPagination = ({ total, defaultCurrent, pageSize, events }) => {
  return (
    <Pagination
      onChange={(e) => {
        events.update(e);
      }}
      showSizeChanger={false}
      showLessItems={false}
      pageSize={pageSize}
      defaultCurrent={defaultCurrent}
      total={total}
    />
  );
};

CustomPagination.propTypes = {
  events: PropTypes.object.isRequired,
};

export default React.memo(CustomPagination);
