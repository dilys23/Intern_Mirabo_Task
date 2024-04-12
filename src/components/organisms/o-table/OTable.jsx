import React from "react";
import { Table } from "antd";

const TableComponent = ({ dataSource, columns }) => {
  return <Table dataSource={dataSource} columns={columns} scroll = {{y :500}} />;
};

export default TableComponent;
