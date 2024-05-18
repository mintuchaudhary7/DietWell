import React from 'react';

const NotificationCard = ({ question, answer }) => {
    return (
        <div className="bg-[#4a5976] shadow-md rounded-lg p-4 m-4">
            <div className="text-2xl font-bold text-white mb-2">Your Question:</div>
            <p className="text-white mb-4">{question}</p>
            <div className="text-2xl font-bold text-white mb-2">Doctor's Answer:</div>
            <p className="text-white">{answer || "Waiting for reply..."}</p>
        </div>
    );
};

export default NotificationCard;
