import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';

const AddTask = () => {
  const [desc, setDesc] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (desc.trim()) {
      dispatch(addTask(desc));
      setDesc('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        placeholder="Enter a task"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTask;
