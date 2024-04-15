import React, { useState } from "react";
import { Table } from "antd";

const TableComponent = ({ dataSource, columns }) => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      scroll={{ y: 500 }}
      pagination={{
        current: page,
        pageSize: pageSize,
        total: 500,
        onChange: (current, pageSize) => {
          setPage(current);
          setPageSize(pageSize);
        },
      }}
    />
  );
};

export default TableComponent;