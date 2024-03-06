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
//importing all the components which are required;
const Navbar = () => {
  // const islog = useContext(UserContext);
  // destructuring the data which we passed in context api 
  // like ham kisi box se kuch bhahar nikal rhe hai consume krne ke liye
  const user = useContext(UserContext);
  const  islogin = user.islogin
  const setIslogin  = user.setIslogin;
  console.log(islogin);
  return (
    <div className="flex justify-between text-xxl font-bold bg-green-300 p-4 flex-shrink-0">
      <div className="ml-10">Logo</div>

      <div className="flex justify-evenly gap-6 mr-10 text-xl ">
        {/* navlink for maping the routes */}
        <NavLink to="/">Home</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/about">About us</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        {/* here we are doing confitional rendering if islogin is true it means user is logged in then we show profile page else loged is false then it render login and signup */}
        {islogin ? (
          <div>profile</div>
        ) : (
          <>
            <NavLink to="/login">Login </NavLink>
            <NavLink to="/signup">Signup</NavLink>
          </>
        )}
      </div>
    </div>
  );
};
export default Navbar;
