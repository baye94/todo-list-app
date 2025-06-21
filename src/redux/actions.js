export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const SET_FILTER = 'SET_FILTER';

export const addTask = (description) => ({
  type: ADD_TASK,
  payload: {
    id: Date.now(),
    description,
    isDone: false,
  },
});

export const toggleTask = (id) => ({
  type: TOGGLE_TASK,
  payload: id,
});

export const editTask = (id, newDesc) => ({
  type: EDIT_TASK,
  payload: { id, newDesc },
});

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: filter,
});
