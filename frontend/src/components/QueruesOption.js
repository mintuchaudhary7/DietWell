import React, { useState } from "react";

const QueryOptions = (props) => {
  const selectedOption = props.selectedOption;
  const setSelectedOption = props.setSelectedOption;
  const FetchQueries = props.FetchQueries;

  const handleOptionChange = async (option) => {
    setSelectedOption(option);
    FetchQueries(option);
    // FetchQueries();
  };

  return (
    <div className="flex justify-center my-4">
      <button
        className={`mx-2 px-4 py-2 rounded-lg ${
          selectedOption === "all"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-gray-700"
        }`}
        onClick={() => handleOptionChange("all")}
      >
        All Queries
      </button>
      <button
        className={`mx-2 px-4 py-2 rounded-lg ${
          selectedOption === "solved"
            ? "bg-green-500 text-white"
            : "bg-gray-200 text-gray-700"
        }`}
        onClick={() => handleOptionChange("solved")}
      >
        Solved Queries
      </button>
      <button
        className={`mx-2 px-4 py-2 rounded-lg ${
          selectedOption === "pending"
            ? "bg-yellow-500 text-white"
            : "bg-gray-200 text-gray-700"
        }`}
        onClick={() => handleOptionChange("pending")}
      >
        Pending Queries
      </button>
    </div>
  );
};

export default QueryOptions;
