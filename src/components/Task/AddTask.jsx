import { Button, Input } from 'antd';
import { MdOutlineCancel } from "react-icons/md";

function AddTask({ onClose }) {
  return (
    <div>
      <div className="overlayer"></div>
      <div className="box">
        <div className="header">
          <h3>Add new todo</h3>
          <button className="close" onClick={onClose}>
            <MdOutlineCancel />
          </button>
        </div>
        <Input
          type="text"
          className="category"
          placeholder="Category Etc Marketing"
        ></Input>
        <Input type="text" className="title" placeholder="title"></Input>
        <Input type="text" className="contentTask" placeholder="Content"></Input>
        <Button className="submitTask" id="enter">
          Submit
        </Button>
      </div>
    </div>
  );
}

export default AddTask;