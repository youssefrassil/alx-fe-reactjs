import axios from 'axios';

const BASE_URL = 'https://api.github.com';

// Function to fetch user data based on search parameters
export const fetchUserData = async (username, location, minRepos) => {
  try {
    // Constructing the query string
    let query = `q=${username}`;

    // Append location filter if provided
    if (location) {
      query += `+location:${location}`;
    }

    // Append minimum repositories count filter if provided
    if (minRepos) {
      query += `+repos:>=${minRepos}`;
    }

    // Make the API call to the GitHub Search API
    const response = await axios.get(`${BASE_URL}/search/users?${query}`);

    // Return the search results from the API response
    return response.data.items;
  } catch (error) {
    throw new Error('Error fetching GitHub users');
  }
};
