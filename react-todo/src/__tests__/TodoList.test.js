// src/__tests__/TodoList.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoList from '../components/TodoList';

test('renders TodoList component', () => {
  const { getByText } = render(<TodoList />);
  expect(getByText('Todo List')).toBeInTheDocument();
});

test('adds a new todo', () => {
  const { getByText, getByPlaceholderText } = render(<TodoList />);
  const input = getByPlaceholderText('Add a new todo');
  const button = getByText('Add Todo');

  fireEvent.change(input, { target: { value: 'New Todo' } });
  fireEvent.click(button);

  expect(getByText('New Todo')).toBeInTheDocument();
});

test('toggles todo completion status', () => {
  const { getByText } = render(<TodoList />);
  const todoItem = getByText('Learn React');

  fireEvent.click(todoItem);
  expect(todoItem).toHaveStyle('text-decoration: line-through');

  fireEvent.click(todoItem);
  expect(todoItem).toHaveStyle('text-decoration: none');
});

test('deletes a todo', () => {
  const { getByText, queryByText } = render(<TodoList />);
  const deleteButton = getByText('Delete');

  fireEvent.click(deleteButton);
  expect(queryByText('Learn React')).not.toBeInTheDocument();
});
