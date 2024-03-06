import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignupImage from "../assets/signup.jpeg";
const Signup = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [ContactNo, setContactno] = useState(0);
  const [confirmPassword, setConfirmPassward] = useState("");
  const [Passward, setPassward] = useState("");
  const [error, setError] = useState(false);
  // declaring usestate variable

  //navigate
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // here we check passward and confirm passward is equal or not  if not equal then set them empty and return
    if (Passward !== confirmPassword) {

      setError(true);
      setPassward("");
      setConfirmPassward("");
      return
      
    }
    // same sa login
    // creatingan object which we have to send to backend
    var addUser = { Name, Email, ContactNo, Passward };
    console.log(addUser);
    // eslint-disable-next-line no-unused-expressions
    // api call same as login
    const response = await fetch("http://localhost:2000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addUser),
    });
    // converting our response to json object
    const result = await response.json();
    
   
    if (!response.ok) {
      console.log(result.error);
      setError(true);
      console.log(error);
    }
    if (response.ok) {
      console.log(result);
      setName("");
      setEmail("");
      //   setAge(0);
      setError("");
      setContactno("");
      setConfirmPassward("");
      setPassward("");
      // above we are makink all the feild empty
      //   setIsSignup(true);
      // after signup we go to login and user can login
      navigate("/login");
    }
  };
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div>
        <img height={600} width={600} src={SignupImage} alt="" />
      </div>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/3"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
        {error ? <div>User already exist or Passward does not match</div> : <></>}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="fullName"
          >
            Full Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="fullName"
            type="text"
            placeholder="Full Name"
            name="fullName"
            value={Name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            name="email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            name="password"
            value={Passward}
            onChange={(e) => setPassward(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="confirmPassword"
          >
            Confirm Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassward(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="phoneNumber"
          >
            Phone Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phoneNumber"
            type="tel"
            placeholder="Phone Number"
            name="phoneNumber"
            value={ContactNo}
            onChange={(e) => setContactno(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};
export default Signup;
