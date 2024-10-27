import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import TaskList from './components/TaskList';

const App = () => (
  <Provider store={store}>
  <div className="container">
    <TaskList />
  </div>
</Provider>
);

export default App;
