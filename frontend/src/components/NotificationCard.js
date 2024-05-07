import React from 'react';

const NotificationCard = ({ question, answer }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 m-4">
            <div className="text-lg font-semibold text-gray-800 mb-2">Your Question:</div>
            <p className="text-gray-600 mb-4">{question}</p>
            <div className="text-lg font-semibold text-gray-800 mb-2">Doctor's Answer:</div>
            <p className="text-gray-600">{answer || "Waiting for reply..."}</p>
        </div>
    );
};

export default NotificationCard;
