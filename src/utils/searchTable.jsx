import React from "react";
import { Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const Search = (props) => {
  const { selectedKeys, setSelectedKeys, confirm, clearFilters, onFilter } = props;

  return (
    <div >
      <Input
        autoFocus
        placeholder="Type text here"
        value={selectedKeys[0]}
        onChange={(e) => {
          setSelectedKeys(e.target.value ? [e.target.value] : []);
          confirm({ closeDropdown: false });
        }}
        onPressEnter={() => {
          confirm();
        }}
        onBlur={() => {
          confirm();
        }}
      ></Input>
      <Button
        onClick={() => {
          confirm();
        }}
        type="primary"
      >
        Tìm kiếm
      </Button>
      <Button
        onClick={() => {
          clearFilters();
        }}
        type="danger"
>
        Reset
      </Button>
    </div>
  );
};

export default Search;