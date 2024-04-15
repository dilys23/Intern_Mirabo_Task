import React, { useState } from "react";
import { Table } from "antd";
const [page, setPage] = useState(1);
const [pageSize, setPageSize] = useState(10);
const TableComponent = ({ dataSource, columns }) => {
  return <Table dataSource={dataSource} columns={columns} scroll = {{y :500}} 
  pagination = {
  {
    current: page,
    pageSize: pageSize,
    total: 500,
    onChange: (page, pageSize) =>
    {
      setPage(page),
      setPageSize(pageSize)
    }
  }}/>;
};

export default TableComponent;
