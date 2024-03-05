import { SocialIcon } from "react-social-icons";
import { Route, Routes } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import MyLocation from "./Location";
import Login from "./Login";
import Signup from "./Signup";
const Navbar = () => {
  return (
    <div>
      {/* this div is for Social icons,calling and gmail  */}
        <div className="flex justify-between">
            <div className="flex gap-5 ">
                <div>
                    <SocialIcon href="facebook.com" url="facebook.com" />
                    <SocialIcon href="facebook.com" url="linkedin.com" />
                    <SocialIcon href="facebook.com" url="instagram.com" />
                    <SocialIcon href="facebook.com" url="twitter.com" />
                </div>
                <div className="flex gap-5">
                    <a href="tel: 917318573930">+91 7318573930</a>
                    <a href="gmail.com">dietdupport@gmail.com</a>
                </div>
            </div>
            <div className="flex gap-5">
                <MyLocation></MyLocation>
                {/* <div>location</div> */}
                <NavLink to="login">login</NavLink>
                <NavLink to="/signUp">Sign up</NavLink>
            </div>
            <Routes>
                <Route path="/login" element={<Login></Login>} />
                <Route path="/SignUp" element={<Signup></Signup>} />
            </Routes>
        </div>
    


      </div>
  );
};
export default Navbar;
