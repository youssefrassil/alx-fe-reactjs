import axios from 'axios';

// Base URL for GitHub API
const BASE_URL = 'https://api.github.com/search/users?q'; 

// Function to fetch users from GitHub's search API
export const fetchUserData = async (username, location = '', minRepos = '') => {
  try {
    // Construct query
    let query = `=${username}`;

    if (location) {
      query += `+location:${location}`;
    }

    if (minRepos) {
      query += `+repos:>=${minRepos}`;
    }
    

    // Ensure that the expected URL structure is being followed
    const response = await axios.get(`${BASE_URL}${query}`);
    
    // Log the full URL to check correctness
    
    return response.data.items;  // GitHub returns results in `items`
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};

// Optional: API Key for higher rate limits
const GITHUB_API_KEY = import.meta.env.VITE_GITHUB_API_KEY;

if (GITHUB_API_KEY) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${GITHUB_API_KEY}`;
}
