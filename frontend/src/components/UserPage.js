// import logo from "./logo.svg";
// import "./App.css";
import { createContext, useState } from "react";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import Notificationbar from "./Notification";
import Home from "./Homepage";
import Login from "./Login";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";
import Signup from "./Signup";
import Footer from "./Footer";
import Changepassward from "./Changepassward";
import ForrgottenPassward from "./Forrgottenpassward";
import { useEffect } from "react";
import Profile from "./Profile";
import UpdateProfile from "./UpdateProfile";
import HairAndSkinCare from "./HairAndSkinCare";
import WeightGain from "./WeightGain";
import WeightLoss from "./WightLoss";
import Stress from "./Stress";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./ProtectedRoute";
import AdminPage from "./AdminPage";
import { useContext } from "react";
import { UserContext } from "../App";
import ApplyDietition from "./ApplyDietition";
import UserDietitionQuestion from "./UserDietitionQuestion";

const Userpage = () => {
  const user = useContext(UserContext);
  const islogin = user.islogin;
  const setIslogin = user.setIslogin;
  const changePasswardOtpVerified = user.changePasswardOtpVerified;
  const setchangePasswardOtpVerified = user.setchangePasswardOtpVerified;
  const role = user.role;
  const logauth = user.logauth;
  const setRole = user.setRole;
  // const [changePasswardOtpVerified, setchangePasswardOtpVerified] =
  //   useState(false);
  
  // const [islogin, setIslogin] = useState(false);
  // const [role, setRole] = useState("");
  return (
    <div className="h-full ">
      <UserContext.Provider
        value={{
          islogin,
          setIslogin,
          changePasswardOtpVerified,
          setchangePasswardOtpVerified,
          role,
          setRole,
        }}
      >
        {console.log(role)}
        <Navbar className=""></Navbar>

        <Routes>
          <Route path="/" element={<Home></Home>} />

          <Route
            path="/services"
            element={
              // <ProtectedRoute>
              <Services></Services>
              // </ProtectedRoute>
            }
          />
          <Route path="about" element={<About></About>} />
          <Route path="/contact" element={<Contact></Contact>} />
          <Route path="/login" element={<Login></Login>} />
          <Route path="/signup" element={<Signup></Signup>} />
          <Route
            path="/forgottenpassward"
            element={<ForrgottenPassward></ForrgottenPassward>}
          />
          <Route
            path="/changepassward"
            element={<Changepassward></Changepassward>}
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile></Profile>
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile/updateprofile"
            element={
              <ProtectedRoute>
                <UpdateProfile></UpdateProfile>
              </ProtectedRoute>
            }
          />
          <Route
            path="/services/hairandskin"
            element={
              <ProtectedRoute>
                <HairAndSkinCare></HairAndSkinCare>
              </ProtectedRoute>
            }
          />
          <Route
            path="/services/weightgain"
            element={
              <ProtectedRoute>
                <WeightGain></WeightGain>
              </ProtectedRoute>
            }
          />
          <Route
            path="/services/weightloss"
            element={
              <ProtectedRoute>
                <WeightLoss></WeightLoss>
              </ProtectedRoute>
            }
          />
          <Route
            path="/services/stress"
            element={
              <ProtectedRoute>
                <Stress></Stress>
              </ProtectedRoute>
            }
          />
          <Route
            path="/applydietition"
            element={
              <ProtectedRoute>
                <ApplyDietition></ApplyDietition>
              </ProtectedRoute>
            }
          />
          <Route
            path="/user-dietition-question"
            element={
              <ProtectedRoute>
                <UserDietitionQuestion></UserDietitionQuestion>
              </ProtectedRoute>
            }
          />
           <Route
            path="/notification"
            element={
              <ProtectedRoute>
                <Notificationbar></Notificationbar>
              </ProtectedRoute>
            }
          />

          <Route path="/*" element={<div>Page not exist</div>} />
        </Routes>
        <ToastContainer className="Toast" />
      </UserContext.Provider>

      <Footer></Footer>
    </div>
  );
};
export default Userpage;
