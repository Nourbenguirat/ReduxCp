import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: JSON.parse(localStorage.getItem('tasks')) || [],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
      localStorage.setItem('tasks', JSON.stringify(state));
    },
    editTask: (state, action) => {
      const { id, name, description } = action.payload;
      const task = state.find((task) => task.id === id);
      if (task) {
        task.name = name;
        task.description = description;
        localStorage.setItem('tasks', JSON.stringify(state));
      }
    },
    deleteTask: (state, action) => {
      const newState = state.filter((task) => task.id !== action.payload);
      localStorage.setItem('tasks', JSON.stringify(newState));
      return newState;
    },
    toggleComplete: (state, action) => {
      const task = state.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
        localStorage.setItem('tasks', JSON.stringify(state));
      }
    },
  },
});

export const { addTask, editTask, deleteTask, toggleComplete } = tasksSlice.actions;
export default tasksSlice.reducer;
