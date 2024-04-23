import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import loginImage from "../assets/4957136.jpg";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const user = useContext(UserContext);
  const { role, setRole, islogin, setIslogin } = user;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const addUser = { email, password };
    const response = await fetch("http://localhost:2000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(addUser),
    });
    const result = await response.json();
    if (!response.ok) {
      setError(true);
      setErrorMessage(result.message);
      toast.error(result.message, {
        position: "top-center",
      });
    }
    if (response.ok) {
      setRole(result.User.Role);
      setEmail("");
      setPassword("");
      setIslogin(true);
      navigate("/");
      toast.success(result.message, {
        position: "top-center",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#233037] py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-[#4a5976] rounded-xl max-w-md w-full space-y-8 mt-8 pb-4 px-4">
        <div>
          <h1 className="mt-2 text-center text-white text-4xl font-extrabold text-gray-900">
            Welcome Back
          </h1>
          <p className="text-center text-white text-sm">Enter your credentials to Login</p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="pb-2 rounded-xl">
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none rounded-md relative block w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none rounded-md relative block w-full px-3 py-2 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
                className="ml-2 block text-sm text-white"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <NavLink to="/forgottenpassward" className="text-green-500">
                forgot password?
              </NavLink>
            </div>
          </div>
          <div>
            <div className="text-white">Not Registered yet ?</div>

            <NavLink to="/signup" className="text-green-500">
              Signup
            </NavLink>
          </div>

          <div>
            <button
              type="submit"
              className="group relative mb-3 ml-32 w-36 flex justify-center py-1 px-2 border border-transparent text-md font-medium rounded-md text-white bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 "
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
