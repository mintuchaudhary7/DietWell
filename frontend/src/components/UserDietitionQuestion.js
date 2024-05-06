import { useState } from "react";
import { toast } from "react-toastify";

const UserDietitionQuestion = () => {
  const [question, setQuestion] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    // alert(`You entered: ${question}`);
    const data = { question };
    const response = await fetch(
      "http://localhost:2000/user/dietition/question",
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
    console.log(result);
    if (!response.ok) {
      toast.error(result.message, {
        position: "top-center",
      });
    }
    if (response.ok) {
      // setQuestion();
      toast.success(result.message, {
        position: "top-center",
      });
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-lg">
        <div className="mb-6">
          <label
            htmlFor="question"
            className="block text-sm font-medium text-gray-700"
          >
            Enter your Question
          </label>
          <textarea
            id="question"
            name="question"
            rows="10"
            className="mt-1 block w-full p-2.5 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            onChange={(e) => setQuestion(e.target.value)}
          ></textarea>
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default UserDietitionQuestion;
