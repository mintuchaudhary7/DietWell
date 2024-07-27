import React, { useState } from "react";
import UserCard from "../components/UserCard";

const SearchDietitionEmail = (props) => {
  const route = props.route;
  const [email, setEmail] = useState("");
  const [Userfound, setUserFound] = useState(false);
  const [menu, setmenu] = useState({});
  const [goterror, setgoterror] = useState("");

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const findUser = async (e) => {
    const token = localStorage.getItem("token");
    e.preventDefault(); // Prevent the form from submitting in the traditional way
    console.log("Finding user:", email);
    const data = { email };
    const response = await fetch(`http://localhost:2000/${route}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
      body: JSON.stringify(data),
    });
    const result = await response.json();
    // console.log(result)
    if (!response.ok) {
      //ii have to show a toast
      setUserFound(false);
      setgoterror(result.message);
      return;
    }
    if (response.ok) {
      setmenu(result.data);
      setUserFound(true);
    }
    // Add the logic to actually fetch the user data based on the email
  };

  return (
    <div className="mx-2">
      <form
        className="max-w-md mx-auto my-10 p-5 rounded-md shadow-lg bg-[#4a5976]"
        onSubmit={findUser}
      >
        <div className="mb-4 ">
          <label
            htmlFor="searchuser"
            className="block text-sm font-semibold text-white"
          >
            Enter Email to find user
          </label>
          <input
            required
            type="text"
            name="searchuser"
            id="searchuser"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={email}
            onChange={handleInputChange}
          />
        </div>
        <input
          type="submit"
          // onClick={findUser}
          value="Find"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded cursor-pointer"
        />
      </form>
      <div className="">
        {Userfound ? (
          <div>
            {" "}
            <h1 className="text-black text-2xl font-semibold ml-4 mb-2">
              The requested user is :{" "}
            </h1>
            <UserCard user={menu}></UserCard>{" "}
          </div>
        ) : (
          <>{goterror}</>
        )}
      </div>
    </div>
  );
};

export default SearchDietitionEmail;
