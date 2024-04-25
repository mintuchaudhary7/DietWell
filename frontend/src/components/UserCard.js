import React, { useState } from 'react';
import { toast } from 'react-toastify';
import ConfirmationModal from './ConfirmationModal'; // Import the ConfirmationModal component

const UserCard = ({ user,reload }) => {
  const [showAllDetails, setShowAllDetails] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const toggleDetails = (e) => {
    e.preventDefault();
    setShowAllDetails((prev) => !prev);
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:2000/delete/${user._id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      if (!response.ok) {
        const errorData = await response.json();
        toast.error(errorData.message);
      } else {
        const result = await response.json();
        toast.success(result.message);
        reload()
      }
    } catch (error) {
      console.error('Error deleting user:', error);
      toast.error('An error occurred while deleting user');
    }
  };

  const handleDeleteConfirmation = async () => {
    await handleDelete();
    setShowConfirmation(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <h2 className="text-lg font-bold mb-2">User Details</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {Object.entries(user).slice(0, 6).map(([key, value]) => (
          <div key={key}>
            <p className="text-sm font-semibold text-gray-600">{key}</p>
            <p className="text-sm overflow-auto">{value}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-4">
        <div>
          <button
            className="py-2 px-4 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition duration-300"
            onClick={toggleDetails}
          >
            {showAllDetails ? 'Hide Details' : 'Show Details'}
          </button>
        </div>
        <div>
          <button
            className="py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300"
            onClick={() => setShowConfirmation(true)}
          >
            Delete
          </button>
        </div>
      </div>
      {showAllDetails && (
        <div className="mt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {Object.entries(user).map(([key, value]) => (
              <div key={key}>
                <p className="text-sm font-semibold text-gray-600">{key}</p>
                <p className="text-sm overflow-auto">{value}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      <ConfirmationModal
        isOpen={showConfirmation}
        message="Are you sure you want to delete this user?"
        onConfirm={handleDeleteConfirmation}
        onCancel={() => setShowConfirmation(false)}
      />
    </div>
  );
};

export default UserCard;