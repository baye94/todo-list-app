import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Task from './Task';
import { setFilter } from '../redux/actions';

const ListTask = () => {
  const { tasks, filter } = useSelector((state) => state);
  const dispatch = useDispatch();

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'DONE') return task.isDone;
    if (filter === 'NOT_DONE') return !task.isDone;
    return true;
  });

  return (
    <div>
      <div>
        <button onClick={() => dispatch(setFilter('ALL'))}>All</button>
        <button onClick={() => dispatch(setFilter('DONE'))}>Done</button>
        <button onClick={() => dispatch(setFilter('NOT_DONE'))}>Not Done</button>
      </div>
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default ListTask;
