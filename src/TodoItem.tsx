import React from 'react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onRemove }) => {
  return (
    <li>
      <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)} />
      {todo.text}
      <button onClick={() => onRemove(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
