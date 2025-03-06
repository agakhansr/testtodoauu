import React, { useState } from 'react';

interface AddTodoProps {
  addTodo: (text: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ addTodo }) => {
  const [text, setText] = useState<string>('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Add new task" 
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTodo;
