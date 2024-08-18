// Import new components and context
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Counter from './components/Counter'; // <-- Add this line
import ProfilePage from './ProfilePage'; // Import the new component
import { UserProvider } from './UserContext'; // Import UserProvider from UserContext

// Import existing components and assets
import WelcomeMessage from './components/WelcomeMessage';
import UserProfile from './components/UserProfile';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserProvider value={userData}>
      <Header />
      <MainContent />

      {/* Include the UserProfile component */}
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />

      {/* Include the WelcomeMessage component */}
      <WelcomeMessage />

      {/* Include the Counter component */}
      <Counter />

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
    </UserProvider>
  );
}

export default App;
