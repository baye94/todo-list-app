import React, { useState, useEffect } from 'react';

// Formulaire pour ajouter ou modifier une tâche
const TaskForm = ({ onSubmit, editingTask, cancelEdit }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (editingTask) {
      setName(editingTask.name);
      setDescription(editingTask.description);
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !description.trim()) {
      setError('Tous les champs sont obligatoires.');
      return;
    }

    const task = {
      id: editingTask ? editingTask.id : Date.now(),
      name,
      description,
      completed: editingTask ? editingTask.completed : false,
    };

    onSubmit(task);
    setName('');
    setDescription('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Nom de la tâche"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      {error && <p className="error">{error}</p>}
      <button type="submit">
        {editingTask ? 'Mettre à jour' : 'Ajouter'}
      </button>
      {editingTask && (
        <button type="button" onClick={cancelEdit}>
          Annuler
        </button>
      )}
    </form>
  );
};

export default TaskForm;
