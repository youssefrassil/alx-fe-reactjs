import axios from 'axios';

// Function to fetch user data from GitHub API
export const fetchUserData = async (username) => {
  const url = `https://api.github.com/users/${username}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error('User not found');
  }
};
