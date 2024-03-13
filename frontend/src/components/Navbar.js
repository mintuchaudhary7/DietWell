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
//importing all the components which are required;
const Navbar = () => {
  const nevigate = useNavigate()
  const clickhandler = () => {
    setIsvisible(!isvisible);
  };
  const logout = async()=>{
    const response = await fetch("http://localhost:2000/logout", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      // body: JSON.stringify(),
    });
    const result = await response.json()
    if (!response.ok) {
      // setIslogin();
      console.log(result);
      console.log("singh");
      
      return;
    }
    if (response.ok) {
      // setIslogin(false);
      console.log("sahil");
      nevigate('/')
      setIslogin(false);
      setIsvisible(false)
      return;
    }
  }
  // const islog = useContext(UserContext);
  // destructuring the data which we passed in context api
  // like ham kisi box se kuch bhahar nikal rhe hai consume krne ke liye
  const user = useContext(UserContext);
  const islogin = user.islogin;
  const [isvisible, setIsvisible] = useState(false);
  const setIslogin = user.setIslogin;
  console.log(islogin);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex justify-between text-xxl font-bold bg-green-300 p-2 items-center  w-full flex-shrink-0">
      {/* <div className="ml-10"> */}
      <NavLink to="/">
        <img
          className="ml-10 rounded-full"
          height={80}
          width={80}
          src={logo}
          alt=""
        ></img>
      </NavLink>

      {/* </div> */}

      <div className="flex justify-evenly gap-6 mr-10 text-xl ">
        {/* navlink for maping the routes */}

        <NavLink to="/">Home</NavLink>
        <NavLink to="/services">Services</NavLink>

        <NavLink to="/about">About us</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        {/* here we are doing confitional rendering if islogin is true it means user is logged in then we show profile page else loged is false then it render login and signup */}
        {islogin ? (
          <div onClick={clickhandler} className="cursor-pointer" >Profile</div>
        ) : (
          <>
            <NavLink to="/login">Login </NavLink>
            <NavLink to="/signup">Signup</NavLink>
          </>
        )}
        {/* <div >
          
        </div> */}
        {isvisible ? (
          <div className="absolute top-14 right-11">
            <NavLink to="/profile">Profile </NavLink>
            
            <div><button onClick={logout}>Logout</button></div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
export default Navbar;
