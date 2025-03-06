import { render, screen, fireEvent } from '@testing-library/react';
import AddTodo from '../AddTodo';

describe('AddTodo', () => {
  test('it should call addTodo when submitting the form', () => {
    const addTodoMock = jest.fn();
    render(<AddTodo addTodo={addTodoMock} />);
    
    const input = screen.getByPlaceholderText('Add new task');
    const button = screen.getByText('Add Task');
    
    fireEvent.change(input, { target: { value: 'New Task' } });
    fireEvent.click(button);

    expect(addTodoMock).toHaveBeenCalledWith('New Task');
  });

  test('it should clear input after submitting the form', () => {
    const addTodoMock = jest.fn();
    render(<AddTodo addTodo={addTodoMock} />);
    
    const input = screen.getByPlaceholderText('Add new task');
    const button = screen.getByText('Add Task');
    
    fireEvent.change(input, { target: { value: 'New Task' } });
    fireEvent.click(button);

    expect(input).toHaveValue('');  // Ensure input is cleared
  });

  test('it should not call addTodo if input is empty', () => {
    const addTodoMock = jest.fn();
    render(<AddTodo addTodo={addTodoMock} />);
    
    const button = screen.getByText('Add Task');
    
    fireEvent.click(button);  // Click submit without entering any text

    expect(addTodoMock).not.toHaveBeenCalled();  // Ensure addTodo is not called
  });
});
