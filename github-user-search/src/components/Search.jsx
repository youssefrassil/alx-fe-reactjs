import React, { useState } from 'react';
import { fetchAdvancedUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setUsers([]);

    const query = {
      username,
      location,
      minRepos
    };

    try {
      const data = await fetchAdvancedUserData(query);
      setUsers(data.items);
    } catch (err) {
      setError("Something went wrong with the search");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">GitHub User Search</h1>
      <form onSubmit={handleSearch} className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="border p-2 rounded"
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
          className="border p-2 rounded"
        />
        <input
          type="number"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          placeholder="Min Repositories"
          className="border p-2 rounded"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Search</button>
      </form>

      {loading && <p className="mt-4">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      <div className="mt-8">
        {users && users.length > 0 && (
          <ul>
            {users.map((user) => (
              <li key={user.id} className="mb-4 p-4 border rounded">
                <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
                <h3 className="text-xl font-bold">{user.login}</h3>
                <p>Location: {user.location || 'N/A'}</p>
                <p>Public Repositories: {user.public_repos}</p>
                <a href={user.html_url} className="text-blue-500" target="_blank" rel="noopener noreferrer">
                  View Profile
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Search;
