import { render, fireEvent, screen } from '@testing-library/react';
import TodoForm from '../components/TodoForm';

test('test todo form', () => {
  // Arrange
  const fakeTodo = { title: 'add todo test' };
  const handleSubmit = jest.fn();

  render(<TodoForm onSubmit={handleSubmit} />);

  const titleNode = document.querySelector('.form-control');
  titleNode.value = fakeTodo.title;
  
  // Act
  const submitButton = screen.getByText('Add Todo');
  fireEvent.click(submitButton);

  // Assert
  expect(handleSubmit).toHaveBeenCalledTimes(1);
  expect(handleSubmit).toHaveBeenCalledWith(fakeTodo);
  expect(submitButton.type).toBe('submit');
});
