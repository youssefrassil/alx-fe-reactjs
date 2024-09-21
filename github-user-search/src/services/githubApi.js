import axios from 'axios';

// Placeholder API function to search GitHub users
export const searchGitHubUsers = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};
