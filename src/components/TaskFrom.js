import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask, editTask } from '../redux/tasksSlice';

const TaskForm = ({ task, onSave }) => {
  const [name, setName] = useState(task ? task.name : '');
  const [description, setDescription] = useState(task ? task.description : '');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && description) {
      if (task) {
        dispatch(editTask({ ...task, name, description }));
      } else {
        dispatch(addTask({ id: Date.now(), name, description, completed: false }));
      }
      onSave();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Task Name"
        required
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task Description"
        required
      />
      <button type="submit">Save Task</button>
    </form>
  );
};

export default TaskForm;
