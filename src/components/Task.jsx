import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, editTask } from '../redux/actions';

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);
  const [newDesc, setNewDesc] = useState(task.description);

  return (
    <div>
      {editing ? (
        <>
          <input
            value={newDesc}
            onChange={(e) => setNewDesc(e.target.value)}
          />
          <button onClick={() => {
            dispatch(editTask(task.id, newDesc));
            setEditing(false);
          }}>Save</button>
        </>
      ) : (
        <>
          <span style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
            {task.description}
          </span>
          <button onClick={() => dispatch(toggleTask(task.id))}>
            {task.isDone ? 'Undo' : 'Done'}
          </button>
          <button onClick={() => setEditing(true)}>Edit</button>
        </>
      )}
    </div>
  );
};

export default Task;
