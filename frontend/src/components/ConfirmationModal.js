import React from 'react';

const ConfirmationModal = ({ isOpen, message, onConfirm, onCancel }) => {
  if (!isOpen) return null;

  const handleConfirm = () => {
    onConfirm();
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <div className={`fixed inset-0 flex items-center justify-center z-50 ${isOpen ? '' : 'hidden'}`}>
      <div className="bg-gray-800 bg-opacity-75 absolute inset-0"></div>
      <div className="bg-white rounded-lg p-8 max-w-sm w-full mx-auto z-50 overflow-y-auto">
        <p className="text-lg text-center mb-4">{message}</p>
        <div className="flex justify-center space-x-4">
          <button
            className="py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300"
            onClick={handleConfirm}
          >
            Confirm
          </button>
          <button
            className="py-2 px-4 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition duration-300"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
