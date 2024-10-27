import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleComplete } from '../redux/tasksSlice';

const TaskItem = ({ task, onEdit }) => {
  const dispatch = useDispatch();

  return (
    <div style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      <h3>{task.name}</h3>
      <p>{task.description}</p>
      <button onClick={() => dispatch(toggleComplete(task.id))}>
        {task.completed ? 'Undo' : 'Complete'}
      </button>
      <button onClick={() => onEdit(task)}>Edit</button>
      <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
    </div>
  );
};

export default TaskItem;
