import React, { useState } from "react";

const QueryOptions = (props) => {
  const selectedOption = props.selectedOption;
  const setSelectedOption = props.setSelectedOption;
  const FetchQueries = props.FetchQueries;
  const count = props.count;
  console.log(count);

  const handleOptionChange = async (option) => {
    setSelectedOption(option);
    FetchQueries(option);

    // FetchQueries();
  };

  return (
    <div className="flex flex-col  md:flex-row justify-center my-4 md:justify-center">
      <button
        className={`ml-2 mr-2 md:ml-10 mt-2 mb-4 mx-2 px-4 py-2 rounded-lg ${
          selectedOption === "all"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-gray-700"
        }`}
        onClick={() => handleOptionChange("all")}
      >
        All Queries {count.allQueries}
      </button>
      <button
        className={`ml-2 mr-2 md:ml-10 mt-2 mb-4 mx-2 px-4 py-2 rounded-lg ${
          selectedOption === "solved"
            ? "bg-green-500 text-white"
            : "bg-gray-200 text-gray-700"
        }`}
        onClick={() => handleOptionChange("solved")}
      >
        Solved Queries {count.solvedQueries}
      </button>
      <button
        className={`ml-2 mr-2 md:ml-10 mt-2 mb-4 mx-2 px-4 py-2 rounded-lg ${
          selectedOption === "pending"
            ? "bg-yellow-500 text-white"
            : "bg-gray-200 text-gray-700"
        }`}
        onClick={() => handleOptionChange("pending")}
      >
        Pending Queries {count.pendingQueries}
      </button>
    </div>
  );
};

export default QueryOptions;
