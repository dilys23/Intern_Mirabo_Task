function addTask()
{
    const popremove = () =>
    {
        onclose();
    }
    return(
        <div>
        <div className="overlayer"></div>
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
    </div >
    </div>
        );
}
export default addTask;