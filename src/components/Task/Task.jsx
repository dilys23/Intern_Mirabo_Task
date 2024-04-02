import '../../pages/Home/style.css';
import { MdOutlineCancel } from "react-icons/md";
function addTask({onClose})
{
   
    return(
        <div>
        <div className="overlayer"></div>
            <div className="box">
                <div className="header">
                    <h3>Add new todo</h3>
                    <button className="close" onClick={onClose}>
                        {/* <i className="bx bx-x"></i> */}
                        <MdOutlineCancel />
                    </button>
                </div>
                <input
                    type="text"
                    className="category"
                    placeholder="Category Etc Marketing" ></input>
                <input type="text" className="title" placeholder="title" ></input>
                <input type="text" className="contentTask" placeholder="Content" ></input>
                <button className="submitTask" id="enter">Submit</button>
    </div >
    </div>
        );
}
export default addTask;