// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Counter from './components/Counter';
import WelcomeMessage from './components/WelcomeMessage';
import UserProfile from './components/UserProfile';
import ProfilePage from './ProfilePage';
import { UserContext } from './UserContext';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

// Import pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import NotFound from './components/NotFound';

// Import Navbar component
import Navbar from './components/Navbar';

// Import components for Recipe Sharing Application
import RecipeList from './components/RecipeList';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';

// Import the RegistrationForm component
import RegistrationForm from './components/RegistrationForm';

// Import the FormikForm component
import FormikForm from './components/FormikForm';

// Import the PostsComponent
import PostsComponent from './components/PostsComponent';

// Import Profile components
import Profile from './components/Profile';
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';

// Import ProtectedRoute component
import ProtectedRoute from './components/ProtectedRoute';

const queryClient = new QueryClient(); // Create an instance of QueryClient

function App() {
  const [count, setCount] = useState(0);
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };
  const isAuthenticated = false; // Simulate authentication status

  return (
    <QueryClientProvider client={queryClient}> {/* Wrap your app in QueryClientProvider */}
      <UserContext.Provider value={userData}>
        <Router>
          <Navbar />
          <Routes>
            {/* Main Pages Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />

            {/* Recipe Sharing Application Routes */}
            <Route path="/recipes" element={
              <div>
                <SearchBar />
                <AddRecipeForm />
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <RecipeList />
                  <div>
                    <FavoritesList />
                    <RecommendationsList />
                  </div>
                </div>
              </div>
            } />
            <Route path="/recipe/:recipeId" element={<RecipeDetails />} />

            {/* Route for User Registration */}
            <Route path="/register" element={
              <div>
                <h1>User Registration</h1>
                <RegistrationForm />
              </div>
            } />

            {/* Route for User Registration with Formik */}
            <Route path="/formik-register" element={
              <div>
                <h1>User Registration with Formik</h1>
                <FormikForm />
              </div>
            } />

            {/* Route for PostsComponent */}
            <Route path="/posts" element={<PostsComponent />} />

            {/* Nested Profile Routes */}
            <Route 
              path="/profile/*" 
              element={
                <ProtectedRoute 
                  element={<Profile />}
                  isAuthenticated={isAuthenticated}
                />
              }
            >
              <Route path="details" element={<ProfileDetails />} />
              <Route path="settings" element={<ProfileSettings />} />
            </Route>

            {/* Nested Routes for ProfilePage */}
            <Route path="/profile-page/*" element={<ProfilePage />} />

            {/* 404 Not Found */}
            <Route path="*" element={<NotFound />} />
          </Routes>

          {/* Other Components */}
          <Header />
          <MainContent />
          <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
          <WelcomeMessage />
          <Counter />

          {/* Logos and Counters */}
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

          <Footer />
        </Router>
      </UserContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
