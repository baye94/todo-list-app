import React from 'react';

// Élément individuel de tâche avec actions
const TaskItem = ({ task, onEdit, onDelete, onToggle }) => {
  return (
    <li className={`task ${task.completed ? 'completed' : ''}`}>
      <div onClick={() => onToggle(task.id)} style={{ cursor: 'pointer', flexGrow: 1 }}>
        <h3>{task.name}</h3>
        <p>{task.description}</p>
      </div>
      <div className="task-actions">
        <button onClick={() => onEdit(task)}>Modifier</button>
        <button onClick={() => onDelete(task.id)}>Supprimer</button>
      </div>
    </li>
  );
};

export default TaskItem;
