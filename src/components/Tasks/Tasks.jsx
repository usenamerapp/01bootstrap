import React from "react";
import "./Tasks.scss";

export default ({ tasks }) => {
  const pagination = [];
  for (let i = 1; i <= 10; i++) {
    pagination.push(i);
  }

  return (
    <div className="tasks">
      Tasks
      <div className="tasks__pagination">
        {pagination.map(p => (
          <span className="tasks__pagination number" onClick={() => alert(p)}>
            {p}
          </span>
        ))}
      </div>
      {tasks.map(t => (
        <div className="tasks__item">{t.task}</div>
      ))}
    </div>
  );
};
