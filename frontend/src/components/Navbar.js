import { Routes, Route } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";
import Home from "./Homepage";
import Login from "./Login";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";
import Signup from "./Signup";
const Navbar = () => {
  return (
    <div className="flex justify-between text-l bg-slate-600 p-2 flex-shrink-0">
      <div className="ml-10">Logo</div>

      <div className="flex justify-evenly gap-6 mr-10 text-xl ">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/about">About us</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/login">Login </NavLink>
        <NavLink to="/signup">signup</NavLink>
      </div>
    </div>
  );
};
export default Navbar;
