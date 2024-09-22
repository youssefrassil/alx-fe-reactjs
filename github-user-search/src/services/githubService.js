import axios from 'axios';

const BASE_URL = 'https://api.github.com';

// Function to search for users based on username, location, and minimum repo count
export const fetchUserData = async (username, location, minRepos) => {
  try {
    // Build the query string for the search API
    let query = `q=${username}`;
    
    // If location is provided, add it to the query
    if (location) {
      query += `+location:${location}`;
    }
    
    // If minimum repository count is provided, add it to the query
    if (minRepos) {
      query += `+repos:>=${minRepos}`;
    }

    // Make the API call to GitHub's Search API
    const response = await axios.get(`${BASE_URL}/search/users?${query}`);
    
    // Return the user data from the API response
    return response.data;
  } catch (error) {
    // Handle any errors that occur during the API call
    throw new Error('Error fetching GitHub users');
  }
};
