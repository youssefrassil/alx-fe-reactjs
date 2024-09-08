// src/__tests__/TodoList.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
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
  const { getAllByText, queryByText } = render(<TodoList />);
  
  // Get all delete buttons
  const deleteButtons = getAllByText('Delete');
  
  // Click the first delete button
  fireEvent.click(deleteButtons[0]);
  
  // Adjust the expectation based on which todo item was removed
  expect(queryByText('Learn React')).not.toBeInTheDocument();
});
