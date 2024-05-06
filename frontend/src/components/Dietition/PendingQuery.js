import React, { useState } from "react";
import { toast } from "react-toastify";

const PendingQuery = ({ menu, fetchQuestion }) => {
  const [reply, setReply] = useState("");
  const id = menu._id;
  const [showReplyInput, setShowReplyInput] = useState(false);

  const handleReplyChange = (e) => {
    setReply(e.target.value);
  };
  //   console.log(menu._id)
  const handleReplySubmit = async () => {
    const data = { reply, id };
    const response = await fetch(
      `http://localhost:2000/user/dietition/submit-dietiton-response`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data),
      }
    );
    const result = await response.json();
    if (!response.ok) {
        toast.error(result.message,{
            position:"top-center"
        })
        setReply("")
    }
    if(response.ok){
        toast.success(result.message,{
            position:"top-center"
        })
        setReply("")
        fetchQuestion();
    }
    // console.log("Reply submitted:", reply);

    setShowReplyInput(false);
    
  };

  return (
    <div>
      <h1>adfgbhnjkml</h1>
      <div key={menu._id} className="border border-gray-200 rounded p-4 mb-4">
        <p>
          <strong>Email:</strong> {menu.Email}
        </p>
        <p>
          <strong>Name:</strong> {menu.Name}
        </p>
        <p>
          <strong>Question:</strong> {menu.Question}
        </p>
        {showReplyInput ? (
          <div className="mt-4">
            <input
              type="text"
              value={reply}
              onChange={handleReplyChange}
              placeholder="Type your reply here..."
              className="border border-gray-300 px-4 py-2 rounded-lg w-full"
            />
            <button
              onClick={handleReplySubmit}
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              Submit Reply
            </button>
          </div>
        ) : (
          <button
            onClick={() => setShowReplyInput(true)}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Reply
          </button>
        )}
      </div>
    </div>
  );
};

export default PendingQuery;
