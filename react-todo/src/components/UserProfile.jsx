// src/components/UserProfile.jsx
import React from 'react';
import { useUser } from './UserContext';  // Correct import

function UserProfile() {
  const userData = useUser(); // Access user data from context

  return (
    <div>
      <h1>{userData.name}</h1>
      <p>{userData.email}</p>
    </div>
  );
}

export default UserProfile;
