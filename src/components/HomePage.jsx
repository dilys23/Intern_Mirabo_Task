 import React, {useState} from 'react';
import './style.css';
import './homePage.css';
import logo from './logoname.svg';
// import 'boxicons';
import addTask from './addTask';
function HomePage() {
    const [showaddTask, setshowaddTask] = useState(false);
    const pop= () =>
    {
        setshowaddTask(true);
    } 
    const popremove = () => {
        setshowaddTask(false);
      }
    const allowDrop = (ev) =>
    {
        ev.preventDefault();
    };
    const drag = (ev)=>
   {
    ev.dataTransfer.setData("text", ev.target.id);
    }
    const drop = (ev)=>
  {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
   }


    return (
        <><div className="header">
            <img src={logo} alt="" />
            <button className="addTask" onClick={pop}>+ New task</button>
        </div><div className="container-task">
                <div className="task-list" id="todo" onDrop={drop} onDragOver={allowDrop}>
                    <div className="task-header">
                        <h5>To do</h5>
                    </div>
                    <div className="line"></div>
                    <div className="box-task todo" id="todo">

                    </div>
                </div>
                <div className="task-list" id="doing" onDrop={drop} onDragOver={allowDrop}>
                    <div className="task-header">
                        <h5>Doing</h5>
                    </div>
                    <div className="line"></div>
                    <div className="box-task doing" id="doing">
                        <div className="child-task" draggable="true" id="1" onDragStart={drag}>
                            <div className="task-group">
                                <div className="task-top">
                                    <div className="content">
                                        <p>Marketing1</p>
                                        <h4>Write SEO article for new product</h4>
                                    </div>
                                    <div className="btn-group">
                                        <i className="bx bx-edit-alt"></i>
                                        <i className="bx bx-trash-alt"></i>
                                    </div>
                                </div>
                                <div className="task-bottom">
                                    <div className="line"></div>
                                    <p className="describe">
                                        This is an existential moment for effective altruism and the
                                        rationalist community write-large.
                                    </p>
                                    <div className="time">
                                        <i className="bx bx-time"></i>
                                        <span>timeday</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="task-list" id="completed" onDrop={drop} onDragOver={allowDrop}>
                    <div className="task-header">
                        <h5>Completed</h5>
                    </div>
                    <div className="line"></div>
                    <div className="box-task completed" id="completed">

                        <div className="child-task" draggable="true" id="2" onDragStart={drag}>
                            <div className="task-group">
                                <div className="task-top">
                                    <div className="content">
                                        <p>Marketing</p>
                                        <h4>Write SEO article for new product</h4>
                                    </div>
                                    <div className="btn-group">
                                        <i className="bx bx-edit-alt"></i>
                                        <i className="bx bx-trash-alt"></i>
                                    </div>
                                </div>
                                <div className="task-bottom">
                                    <div className="line"></div>
                                    <p className="describe">
                                        This is an existential moment for effective altruism and the
                                        rationalist community write-large.
                                    </p>
                                    <div className="time">
                                        <i className="bx bx-time"></i>
                                        <span>timeday</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="task-list" id="blocked" onDrop={drop} onDragOver={allowDrop}>
                    <div className="task-header">
                        <h5>Blocked</h5>
                    </div>
                    <div className="line"></div>
                    <div className="child-task" draggable="true" id="3" onDragStart={drag}>
                        <div className="task-group">
                            <div className="task-top">
                                <div className="content">
                                    <p>Marketing</p>
                                    <h4>Write SEO article for new product</h4>
                                </div>
                                <div className="btn-group">
                                    <i className="bx bx-edit-alt"></i>
                                    <i className="bx bx-trash-alt"></i>
                                </div>
                            </div>
                            <div className="task-bottom">
                                <div className="line"></div>
                                <p className="describe">
                                    This is an existential moment for effective altruism and the
                                    rationalist community write-large.
                                </p>
                                <div className="time">
                                    <i className="bx bx-time"></i>
                                    <span>timeday</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {setshowaddTask && <addTask onClose={popremove} />}
            {/* <div className="overlayer"></div>
            <div className="box">
                <div className="header">
                    <h3>Add new todo</h3>
                    <button className="close" onClick={popremove}>
                        <i className="bx bx-x"></i>
                    </button>
                </div>
                <input
                    type="text"
                    className="category"
                    placeholder="Category Etc Marketing" />
                <input type="text" className="title" placeholder="Title" />
                <input type="text" className="contentTask" placeholder="Content" ></input>
                <button className="submitTask" id="enter">Submit</button>
    </div > */}
   </>

    );

}
export default HomePage;