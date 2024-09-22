import axios from 'axios';

const BASE_URL = 'https://api.github.com';

// Function to search for users based on username, location, and minimum repo count
export const fetchUserData = async (username, location, minRepos) => {
  try {
    // Build query string based on search parameters
    let query = `q=${username}`;
    
    if (location) {
      query += `+location:${location}`;
    }
    
    if (minRepos) {
      query += `+repos:>=${minRepos}`;
    }

    const response = await axios.get(`${BASE_URL}/search/users?${query}`);
    
    // Return the user data from the API response
    return response.data;
  } catch (error) {
    throw new Error('Error fetching GitHub users');
  }
};
