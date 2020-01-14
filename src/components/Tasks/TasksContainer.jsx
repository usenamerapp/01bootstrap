import React, { useEffect } from "react";
import Tasks from "./Tasks";
import { getTasksThunk } from "../../store/thunks";
import { connect } from "react-redux";

const TasksContainer = props => {
  const { getTasksThunk } = props;

  useEffect(() => {
    getTasksThunk(1, 5);
  }, [getTasksThunk]);

  return (
    <div className="">
      <Tasks {...props} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    tasks: state.tasksReducerPage.tasks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getTasksThunk: (page, limit) => dispatch(getTasksThunk(page, limit))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TasksContainer);
