// Import the new components
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

// Import existing components and assets
import WelcomeMessage from './components/WelcomeMessage';
import UserProfile from './components/UserProfile'; // <-- Add this line
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Include the new components */}
      <Header />
      <MainContent />

      {/* Include the UserProfile component */}
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      
      {/* Include the WelcomeMessage component */}
      <WelcomeMessage />
      
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      
      <h1>Vite + React</h1>
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      
      {/* Include the Footer component */}
      <Footer />
    </>
  );
}

export default App;
