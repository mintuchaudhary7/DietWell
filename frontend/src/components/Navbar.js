import { Routes, Route } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";
import Home from "./Homepage";
import Login from "./Login";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";
import Signup from "./Signup";
import { useContext } from "react";
import { UserContext } from "../App";
import logo from "../assets/logo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Avatar from "react-avatar";

//importing all the components which are required;

const Navbar = () => {
  const nevigate = useNavigate();
  const clickhandler = () => {
    setIsvisible(!isvisible);
  };
  // logout function
  const logout = async () => {
    const response = await fetch("http://localhost:2000/logout", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      // body: JSON.stringify(),
    });
    const result = await response.json();
    if (!response.ok) {
      // setIslogin();
      console.log(result);
      console.log("singh");
      toast.error(result.message, {
        position: "top-center",
      });
      return;
    }
    if (response.ok) {
      console.log(result);
      nevigate("/");
      setIslogin(false);
      setIsvisible(false);
      toast.success(result.message, {
        position: "top-center",
      });
      return;
    }
  };
  // const islog = useContext(UserContext);
  // destructuring the data which we passed in context api
  // like ham kisi box se kuch bhahar nikal rhe hai consume krne ke liye
  const user = useContext(UserContext);
  console.log(user)
  const islogin = user.islogin;
  const [isvisible, setIsvisible] = useState(false);
  const setIslogin = user.setIslogin;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  // console.log(islogin);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-[#4a5976] p-2  font-bold fixed z-10 w-full text-white max-h-20">
      <div className="max-w-6xl mx-auto text-2xl flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <NavLink to="/">
            <img
              className="ml-4 sm:ml-10 rounded-full"
              height={65}
              width={65}
              src={logo}
              alt=""
            />
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className=" md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-3xl text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex justify-evenly gap-6 mr-10 text-xl ">
          {/* NavLinks for routes */}
          <NavLink className="hover:text-green-400" to="/notification">Notification</NavLink>
          <NavLink className="hover:text-green-400" to="/">Home</NavLink>
          <NavLink className="hover:text-green-400" to="/services">Services</NavLink>
          <NavLink className="hover:text-green-400" to="/about">About us</NavLink>
          <NavLink className="hover:text-green-400" to="/contact">Contact</NavLink>

          {/* Conditional rendering for login/signup or profile/logout */}
          {islogin ? (
            <div onClick={clickhandler} className="cursor-pointer">
              <Avatar round={true} size="40" name="Sahil" />
            </div>
          ) : (
            <>
              <NavLink className="hover:text-green-400" to="/login">Login</NavLink>
              <NavLink className="hover:text-green-400" to="/signup">Signup</NavLink>
            </>
          )}

          {/* Conditional rendering for profile/logout dropdown */}
          {isvisible ? (
            <div className="relative w ">
              <div className="absolute rounded-md flex items-center justify-center flex-col top-full  right-0 z-10 bg-green-200 rounded-md1 shadow-lg mt-2 py-2 w-35">
                <NavLink
                  to="/profile"
                  className="block  text-left px-4 py-2 text-sm text-gray-800 hover:bg-green-100"
                >
                  Profile
                </NavLink>
                <button
                  onClick={logout}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-green-100"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col mt-2">
           <NavLink className="hover:text-green-400" to="/notification">Notification</NavLink>
          <NavLink to="/" className="block px-4 py-2 text-black">
            Home
          </NavLink>
          <NavLink to="/services" className="block px-4 py-2 text-black">
            Services
          </NavLink>
          <NavLink to="/about" className="block px-4 py-2 text-black">
            About us
          </NavLink>
          <NavLink to="/contact" className="block px-4 py-2 text-black">
            Contact
          </NavLink>
          {islogin ? (
            <div onClick={clickhandler} className="block px-4 py-2 text-black">
              Profile
            </div>
          ) : (
            <>
              <NavLink to="/login" className="block px-4 py-2 text-black">
                Login
              </NavLink>
              <NavLink to="/signup" className="block px-4 py-2 text-black">
                Signup
              </NavLink>
            </>
          )}
          {isvisible && (
            <div className="relative">
              <div className="absolute top-full right-0 z-10 bg-white rounded-md shadow-lg mt-2 py-2 w-40">
                <NavLink to="/profile" className="block px-4 py-2 text-black">
                  Profile
                </NavLink>
                <button
                  onClick={logout}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};
export default Navbar;
