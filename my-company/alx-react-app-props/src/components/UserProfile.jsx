import React, { useContext } from 'react';
import UserContext from '../context/UserContext'; // Import UserContext

function UserProfile() {
  const userData = useContext(UserContext); // Use useContext to access context value

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserProfile;
