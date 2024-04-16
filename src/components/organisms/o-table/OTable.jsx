import React, { useState } from "react";
import { Table } from "antd";

const TableComponent = ({ dataSource, columns, scroll, defaultCurrent, defaultCurrentSize , total }) => {
  const [pagination, setPagination] = useState({ current: defaultCurrent, pageSize: defaultCurrentSize });

  const handleTableChange = (pagination) => {
    setPagination(pagination);
  };

  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      pagination={{
        ...pagination,
        total: total,
        onChange: handleTableChange
      }}
      scroll={scroll}
      onChange={handleTableChange}
    />
  );
};

export default TableComponent;
