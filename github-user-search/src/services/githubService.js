import axios from 'axios';

// Function to fetch users from GitHub API with advanced search
export const fetchAdvancedUserData = async ({ username, location, minRepos }) => {
  const baseUrl = 'https://api.github.com/search/users';
  let query = `q=${username}`;

  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>=${minRepos}`;

  try {
    const response = await axios.get(`${baseUrl}?${query}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch users');
  }
};
