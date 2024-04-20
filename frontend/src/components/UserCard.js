import React from 'react';

const UserCard = ({ user }) => {
  // Extract user data into an array of field-value pairs
  const userData = Object.entries(user);
  
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <h2 className="text-lg font-bold mb-2">User Details</h2>
      <div className="grid grid-cols-2 gap-6 gap-x-20">
        {userData.map(([key, value]) => (
          <div key={key}>
            <p className="text-sm font-semibold text-gray-600">{key}</p>
            <p className="text-sm">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserCard;
