import React, { useState } from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  
  const addTodo = (text: string) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="app">
      <h1>ToDo List</h1>
      <AddTodo addTodo={addTodo} />
      <h2>Active Tasks</h2>
      <TodoList todos={todos.filter(todo => !todo.completed)} onToggle={toggleTodo} onRemove={removeTodo} />
      <h2>Completed Tasks</h2>
      <TodoList todos={todos.filter(todo => todo.completed)} onToggle={toggleTodo} onRemove={removeTodo} />
    </div>
  );
};

export default App;
