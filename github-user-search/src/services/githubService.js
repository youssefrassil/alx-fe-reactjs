import axios from 'axios';

// Base URL for GitHub API
const BASE_URL = 'https://api.github.com';

// Function to fetch users from GitHub's search API
export const fetchUserData = async (username, location = '', minRepos = '') => {
  try {
    // Construct query
    let query = `q=${username}`;

    if (location) {
      query += `+location:${location}`;
    }

    if (minRepos) {
      query += `+repos:>=${minRepos}`;
    }

    // Ensure that the expected URL structure is being followed
    const response = await axios.get(`${BASE_URL}/search/users?${query}`);
    
    // Log the full URL to check correctness
    console.log(`Calling API: ${BASE_URL}/search/users?${query}`);
    
    return response.data.items;  // GitHub returns results in `items`
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};

// Optional: API Key for higher rate limits
const GITHUB_API_KEY = process.env.REACT_APP_GITHUB_API_KEY;

if (GITHUB_API_KEY) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${GITHUB_API_KEY}`;
}
