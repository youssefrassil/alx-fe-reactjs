import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './components/HomePage'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* HomePage component */}
      <div className="App">
        <HomePage />
      </div>

      {/* Original content with logos and counter */}
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

      {/* New Recipe Sharing Platform section */}
      <div className="text-blue-500 text-center">
        <h1>Recipe Sharing Platform</h1>
      </div>
    </>
  )
}
