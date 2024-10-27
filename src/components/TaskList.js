import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TaskForm from './TaskFrom';
import TaskItem from './TaskItem';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const [editingTask, setEditingTask] = useState(null);

  return (
    <div>
      <h2>To-Do List</h2>
      <TaskForm
        task={editingTask}
        onSave={() => setEditingTask(null)}
      />
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onEdit={setEditingTask} />
      ))}
    </div>
  );
};

export default TaskList;
