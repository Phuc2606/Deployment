import React from 'react';

export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <label className="todo-label">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <span className="task-text">{todo.text}</span>
      </label>
      {onDelete && (
        <button 
          className="delete-btn" 
          onClick={() => onDelete(todo.id)}
          aria-label="Delete todo"
        >
          &times;
        </button>
      )}
    </li>
  );
}