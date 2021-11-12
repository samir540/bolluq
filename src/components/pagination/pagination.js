import React from "react";
import PropTypes, { func } from "prop-types";
import { Pagination } from "antd";

const CustomPagination = ({ total, defaultCurrent, pageSize, events }) => {
  console.log("render");

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
