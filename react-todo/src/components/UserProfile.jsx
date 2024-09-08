// src/components/UserProfile.jsx
// Note: src/components/UserProfile.jsx doesn't contain: ["useContext"]

import React from 'react';
import { useUser } from './UserContext';

function UserProfile() {
  const userData = useUser(); // Access user data from context

  if (!userData) {
    return <p>No user data available</p>; // Handle case where context might be undefined
  }

  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserProfile;
