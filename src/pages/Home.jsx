import React from "react";
import "./index.scss";
import TasksContainer from "../components/Tasks/TasksContainer";

export default () => {
  return (
    <div className="wrapper">
      <div className="sidebar">sidebar</div>
      <div className="header-content">
        <div className="header">header</div>
        <div className="content">
          <div className="content__item">
            <TasksContainer />
          </div>
        </div>
      </div>
    </div>
  );
};
