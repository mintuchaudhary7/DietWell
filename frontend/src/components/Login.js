import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext, createContext } from "react";
import { UserContext } from "../App";
import loginImage from "../assets/4957136.jpg";
// importing the components which are required
const Login = () => {
  const user = useContext(UserContext);
  //  same again ham destructure krr rhe hai jaise navbar me kiya the
  const islogin = user.islogin;
  const setIslogin = user.setIslogin;
  const [Email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [Passward, setPassward] = useState("");
  // creating a usestate variable read usestate and useeffect form we3schools
  const navigate = useNavigate(); //navigete for moving form one rout to another
  const handleSubmit = async (e) => {
    e.preventDefault();
    //default behevior is to reload the page and we are prventing fro reloding the page
    var addUser = { Email, Passward }; //creating an object email and passward which we have to send on backend for maching with data is stored in backend;
    // this is used to make call for backend server
    const response = await fetch("http://localhost:2000/login", {
      method: "POST", //post request because we are sending data to backend
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addUser), //we can say this is type or body parser use to json -> string
    });
    const result = await response.json(); //await is used because function is async and it takes some time
    // if any error occur in backend this block executed
    if (!response.ok) {
      console.log(result.error);
      setError(true);
      //setting  error because we have to display error that user entered wrong passward
      // setError(result.error);
    }
    if (response.ok) {
      console.log(result);
      // making all the feilds empty
      setEmail("");
      setPassward("");
      // making isloggin true because if passward matches then used is logged in and we have to show profile route in navebar
      setIslogin(true);
      //  and finally out log in success then user ko home route pe chala jayega using nevigate
      navigate("/");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <img className="" src={loginImage} height={500} width={500} alt="Logo" />
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
          {/* again here we are doing conditional rendering */}
          {error ? (
            <h1 className="text-red-500">Incorrect passward or gmail</h1>
          ) : (
            <></>
          )}
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                // {/* // this is use for is our user change anything to form it immidiatly updates the value and when user click submit button then aur browser dont need to collect data from here and there is help to increase response time of website */}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={Passward}
                onChange={(e) => setPassward(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember_me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;