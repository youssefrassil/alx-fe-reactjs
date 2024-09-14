// src/App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { UserContext } from './components/UserContext'; // Ensure this path is correct

// Mock user data
const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

// Set up QueryClient for testing
const queryClient = new QueryClient();

test('renders Vite and React logos', () => {
  render(
    <QueryClientProvider client={queryClient}>
      <UserContext.Provider value={userData}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UserContext.Provider>
    </QueryClientProvider>
  );

  // Check if the Vite and React logos are rendered
  const viteLogo = screen.getByAltText(/Vite logo/i);
  const reactLogo = screen.getByAltText(/React logo/i);
  expect(viteLogo).toBeInTheDocument();
  expect(reactLogo).toBeInTheDocument();
});

test('increments counter', () => {
  render(
    <QueryClientProvider client={queryClient}>
      <UserContext.Provider value={userData}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UserContext.Provider>
    </QueryClientProvider>
  );

  // Check the initial count
  const button = screen.getByText(/count is 0/i);
  expect(button).toBeInTheDocument();

  // Simulate click event to increment the count
  button.click();
  expect(button).toHaveTextContent('count is 1');
});
