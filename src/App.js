import React from 'react';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';

const App = () => (
  <div>
    <h1>ToDo App with Redux</h1>
    <AddTask />
    <ListTask />
  </div>
);

export default App;
