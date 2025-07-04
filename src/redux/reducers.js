import { ADD_TASK, TOGGLE_TASK, EDIT_TASK, SET_FILTER } from './actions';

const initialState = {
  tasks: [],
  filter: 'ALL', // ALL | DONE | NOT_DONE
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };

    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, isDone: !task.isDone }
            : task
        ),
      };

    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, description: action.payload.newDesc }
            : task
        ),
      };

    case SET_FILTER:
      return { ...state, filter: action.payload };

    default:
      return state;
  }
};
