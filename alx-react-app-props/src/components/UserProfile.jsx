// src/components/UserProfile.jsx
import React from 'react';
import { useUser } from '../UserContext'; // Adjust the path as needed

function UserProfile() {
  const userData = useUser(); // Access user data from context

  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserProfile;
