import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

const ShowQueries = (props) => {
  var user = props.user;
  const reload = props.reload;
  const selectedOption = props.selectedOption;
  const [isSolved, setIsSolved] = useState(false);
  //   const  = fetch;
  const [id, setid] = useState("");
  useEffect(() => {
    if (user && user.Status && user.Status.toLowerCase() === "solved") {
      setIsSolved(true);
    } else {
      setIsSolved(false);
    }
  }, [user]);
  useEffect(() => {
    if (user && user._id) {
      setid(user._id);
    } else {
      setIsSolved(false);
    }
  }, [user]);
  const MarkasSolved = async () => {
    const response = await fetch(`http://localhost:2000/id/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      // body: JSON.stringify(),
    });
    const result = await response.json();
    if (!response.ok) {
      toast.error(result.message, {
        position: "top-center",
      });
      return;
    }
    if (response.ok) {
      toast.success(result.message, {
        position: "top-center",
      });
      reload(selectedOption);
      return;
    }
  };
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      {/* console.log(user) */}
      <h2 className="text-lg font-bold mb-2">Query Details</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {Object.entries(user).map(([key, value]) => (
          <div key={key}>
            {/* {key=== "Status" ? key.Status === "solved" ? setisSolved("solved") : <></>:<></>} */}

            <p className="text-sm font-semibold text-gray-600">{key}</p>
            <p className="text-sm overflow-auto">{value}</p>
          </div>
        ))}
      </div>
      {isSolved ? (
        <></>
      ) : (
        <button  onClick={MarkasSolved}>Mark as Solved</button>
      )}
    </div>
  );
};

export default ShowQueries;
