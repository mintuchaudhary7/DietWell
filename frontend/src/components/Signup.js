import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignupImage from "../assets/signupImage.jpg";
import loginImage from "../assets/loginImage.jpeg";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../App";
// <<<<<<< version-s
//import validator from 'validator' c
import { toast } from "react-toastify";
// =======

// >>>>>>> main

const Signup = () => {
  const user = useContext(UserContext);

  //  same again ham destructure krr rhe hai jaise navbar me kiya the
  const islogin = user.islogin;
  const setIslogin = user.setIslogin;

  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [ContactNo, setContactno] = useState(0);
  const [confirmPassword, setConfirmPassward] = useState("");
  const [Passward, setPassward] = useState("");
  const [Role, setRole] = useState("");
  // const [error, setError] = useState(false);
  // const [errorMessage,setErrorMessage] = useState(false);
  // declaring usestate variable

  //navigate
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // here we check passward and confirm passward is equal or not  if not equal then set them empty and return
    if (Passward !== confirmPassword) {
      // setError(true);
      // setErrorMessage("Passward and confirm passward not matched");
      setPassward("");
      setConfirmPassward("");
      toast.error("Passward and confirm passward not matched", {
        position: "top-center",
      });
      return;
    }
    // same sa login
    // creatingan object which we have to send to backend
    var addUser = { Name, Email, ContactNo, Passward, Role };
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
      // console.log(result.error);
      // setError(true);
      // setErrorMessage(result.message);
      toast.error(result.message, {
        position: "top-center",
      });
      console.log(result.message);
    }
    if (response.ok) {
      console.log(result);
      setName("");
      setEmail("");
      //   setAge(0);
      // setError("");
      toast.success(result.message, {
        position: "top-center",
      });
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
    <div className="min-h-screen flex flex-col sm:flex-row items-center justify-center bg-[#233037] py-12 px-4  sm:px-6 lg:px-8">
      <div className="rounded-xl flex flex-col sm:flex-row items-center justify-between bg-[#4a5976] mt-10 ">
        <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 center ">
          <img className="rounded-l-xl" height={790} width={500} src={loginImage} alt="" />
        </div>
        <form
          
          onSubmit={handleSubmit}
        >
          {/* {error ? <div className="text-red-400">{errorMessage}</div> : <></>} */}
          <div className="pr-8">
          <h2 className="text-4xl text-center text-green-400 font-extrabold mt-4">Registration</h2>
          <p className=" text-center text-white text-sm font-normal mb-6">Let's start a Legendary journey together</p>
            <div className="my-2 flex justify-center">
              <label
                className="block text-white w-1/2 text-sm font-bold mb-2 "
                htmlFor="fullName"
              >
                Full Name
              </label>
              <input
                className="shadow appearance-none border rounded  ml-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="fullName"
                type="text"
                placeholder="Full Name"
                name="fullName"
                value={Name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="my-2 flex justify-center">
              <label
                className="block text-white w-1/2 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
                name="email"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="my-2 flex justify-center">
              <label
                className="block text-white w-1/2 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Role
              </label>
              <input
                className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="Role"
                type="text"
                placeholder="Role"
                name="Role"
                value={Role}
                onChange={(e) => setRole(e.target.value)}
                required
              />
            </div>
            <div className="my-2 flex justify-center">
              <label
                className="block text-white w-1/2 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
                name="password"
                value={Passward}
                onChange={(e) => setPassward(e.target.value)}
                required
              />
            </div>
            <div className="my-2 flex justify-center">
              <label
                className="block text-white w-1/2 text-sm font-bold mb-2"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassward(e.target.value)}
                required
              />
            </div>
            <div className="my-2 flex justify-center">
              <label
                className="block text-white w-1/2 text-sm font-bold mb-2"
                htmlFor="phoneNumber"
              >
                Phone Number
              </label>
              <input
                className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phoneNumber"
                type="tel"
                placeholder="Phone Number"
                name="phoneNumber"
                value={ContactNo}
                onChange={(e) => setContactno(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-green-500  hover:bg-green-700 text-white font-bold py-2 px-4  rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign Up
            </button>
            <div className="mt-4 text-white mr-8 md:mt-0">
              <div>Already registered ?</div>
              <NavLink to="/login" className="text-green-400">
                Log in
              </NavLink>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Signup;
