// src/App.jsx
import React, { useState } from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Counter from './components/Counter'; // Add this line

// Import existing components and assets
import WelcomeMessage from './components/WelcomeMessage';
import UserProfile from './components/UserProfile';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

// Import UserContext
import { UserProvider } from './UserContext';

function App() {
  const [count, setCount] = useState(0);
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserProvider value={userData}>
      <div className="app-container">
        <Header />
        <MainContent />
        
        <div className="main-content">
          <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
          <WelcomeMessage />
          <Counter />
        </div>
        
        <div className="logo-container">
          <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        
        <h1>Vite + React</h1>
        
        <div className="card">
          <button onClick={() => setCount(count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
        
        <Footer />
      </div>
    </UserProvider>
  );
}

export default App;
