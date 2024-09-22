import axios from 'axios';

// Base URL for the GitHub API
const BASE_URL = 'https://api.github.com';

// Function to fetch user data from GitHub's search API
export const fetchUserData = async (username, location = '', minRepos = '') => {
  try {
    // Building the query string
    let query = `q=${username}`;

    // Add location to query if specified
    if (location) {
      query += `+location:${location}`;
    }

    // Add repository count filter to query if specified
    if (minRepos) {
      query += `+repos:>=${minRepos}`;
    }

    // Complete API URL
    const response = await axios.get(`${BASE_URL}/search/users?${query}`);

    // Return the user data
    return response.data.items;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw new Error('Failed to fetch GitHub users');
  }
};
