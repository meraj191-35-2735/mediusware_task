import React, { useState } from "react";

const Problem1 = () => {
  const [show, setShow] = useState("all");
  const [taskList, setTaskList] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [taskStatus, setTaskStatus] = useState("");

  const handleClick = (val) => {
    setShow(val);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      name: taskName,
      status: taskStatus.toLowerCase(), // Convert status to lowercase
    };
    const updatedTaskList = [...taskList, newTask];
    setTaskList(updatedTaskList);
    setTaskName("");
    setTaskStatus("");
    console.log(updatedTaskList);
  };

  const filteredTasks =
    show === "active"
      ? taskList.filter((task) => task.status.toLowerCase() === "active")
      : show === "completed"
      ? taskList.filter((task) => task.status.toLowerCase() === "completed")
      : taskList;

  const sortedTasks =
    show === "all"
      ? [
          ...filteredTasks.filter((task) => task.status.toLowerCase() === "active"),
          ...filteredTasks.filter((task) => task.status !== "active"),
        ]
      : filteredTasks;

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
        <div className="col-6 ">
          <form
            onSubmit={onSubmit}
            className="row gy-2 gx-3 align-items-center mb-4"
          >
            <div className="col-auto">
              <input
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                name="name"
                type="text"
                className="form-control"
                placeholder="Name"
              />
            </div>
            <div className="col-auto">
              <input
                value={taskStatus}
                onChange={(e) => setTaskStatus(e.target.value)}
                name="status"
                type="text"
                className="form-control"
                placeholder="Status"
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-8">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link ${show === "all" && "active"}`}
                type="button"
                onClick={() => handleClick("all")}
              >
                All
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "active" && "active"}`}
                type="button"
                onClick={() => handleClick("active")}
              >
                Active
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "completed" && "active"}`}
                type="button"
                onClick={() => handleClick("completed")}
              >
                Completed
              </button>
            </li>
          </ul>
          <div className="tab-content"></div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {sortedTasks.map((task, index) => (
                <tr key={index}>
                  <td>{task.name}</td>
                  <td>{task.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem1;
