import React, { useState } from 'react';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Deploy to Vercel', completed: true },
    { id: 3, text: 'Learn ASP.NET', completed: false },
  ]);

  const handleAddTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  const handleToggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app-container">
      <Header />
      <TodoForm onAddTodo={handleAddTodo} />
      <TodoList 
        todos={todos} 
        onToggle={handleToggleTodo} 
        onDelete={handleDeleteTodo} 
      />
      <hr className="divider bottom-divider" />
    </div>
  );
}