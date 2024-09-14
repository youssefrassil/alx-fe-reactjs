import React from 'react';

function UserProfile() {
  return (
    <div className="bg-gray-100 sm:p-4 sm:p-6 md:p-8 max-w-xs md:max-w-sm mx-auto my-20 rounded-lg shadow-lg">
      <img 
        src="https://via.placeholder.com/150" 
        alt="User" 
        className="rounded-full sm:w-24 sm:h-24 md:w-36 md:h-36 mx-auto" 
      />
      <h1 className="text-lg md:text-xl text-blue-800 my-4">John Doe</h1>
      <p className="text-sm md:text-base text-gray-600">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;
