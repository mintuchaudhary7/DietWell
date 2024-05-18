import { useState } from "react";
import { toast } from "react-toastify";

const UserDietitionQuestion = () => {
  const [question, setQuestion] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    // alert(`You entered: ${question}`);
    const token = localStorage.getItem('token')
    const data = { question };
    const response = await fetch(
      "http://localhost:2000/user/dietition/question",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${token}`,
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
    <div className="flex items-center justify-center h-screen bg-[#233037] px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-lg">
        <div className="mb-6">
          <label
            htmlFor="question"
            className="block text-xl font-bold text-white"
          >
            Ask your Question from Dietition
          </label>
          <textarea
            id="question"
            name="question"
            rows="10"
            placeholder="Ask Your Question"
            className="mt-1 block w-full p-2.5 border bg-[#4a5976] text-white rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            onChange={(e) => setQuestion(e.target.value)}
          ></textarea>
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default UserDietitionQuestion;
