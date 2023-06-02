import React from 'react';
import { Task } from './Task';

const ListTask = ({ tasks }) => {
  if (!tasks) {
    return null; // or any appropriate loading or error message
  }

  return (
    <div>
      {tasks.map((task, index) => (
        <Task key={index} task={task} />
      ))}
    </div>
  );
};

export default ListTask;
