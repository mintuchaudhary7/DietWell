import logo from "./logo.svg";
import "./App.css";
import { createContext, useState } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Homepage";
import Login from "./components/Login";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Signup from "./components/Signup";
import Footer from "./components/Footer";
import Changepassward from "./components/Changepassward";
import ForrgottenPassward from "./components/Forrgottenpassward";
import { useEffect } from "react";
import Profile from "./components/Profile";
import UpdateProfile from "./components/UpdateProfile";
import HairAndSkinCare from "./components/HairAndSkinCare";
import WeightGain from "./components/WeightGain";
import WeightLoss from "./components/WightLoss";
import Stress from "./components/Stress";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminPage from "./components/AdminPage";
import Userpage from "./components/UserPage";
import DietitionPage from "./components/Dietition/DietitionPage";

// const islogin = createContext();
const UserContext = createContext();
function App() {
  const [changePasswardOtpVerified, setchangePasswardOtpVerified] =
    useState(false);
  const [islogin, setIslogin] = useState(false);
  const [role, setRole] = useState("");
  
  const logauth = async (e) => {
    // const data = { islogin };
    const response = await fetch("http://localhost:2000/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      // body: JSON.stringify(),
    });
    const result = await response.json();
    // console.log(response);
    if (!response.ok) {
      setIslogin(false);
      console.log(response);
      return;
    }
    if (response.ok) {
      setIslogin(true);
      setRole(result.role)
      console.log("sahil");
      return;
    }
  };
  // we are using use effect because we need to check on first render
  useEffect(() => {
   logauth();
  }, []);
  return (
    role ==="admin" ? <UserContext.Provider
    value={{
      islogin,
      setIslogin,
      changePasswardOtpVerified,
      role,setRole,logauth,
      setchangePasswardOtpVerified,
    }}
  ><AdminPage></AdminPage></UserContext.Provider> : role === "Dietiton" ?  <UserContext.Provider
  value={{
    islogin,
    setIslogin,
    changePasswardOtpVerified,
    role,setRole,logauth,
    setchangePasswardOtpVerified,
  }}
><DietitionPage></DietitionPage></UserContext.Provider>  : <UserContext.Provider
    value={{
      islogin,
      setIslogin,
      changePasswardOtpVerified,
      setchangePasswardOtpVerified,
      role,setRole
    }}
  ><Userpage value={{
    islogin,
    setIslogin,
    changePasswardOtpVerified,
    setchangePasswardOtpVerified,
    role,setRole,logauth
  }}></Userpage></UserContext.Provider>
    // <div className="h-full ">
    //   <UserContext.Provider
    //     value={{
    //       islogin,
    //       setIslogin,
    //       changePasswardOtpVerified,
    //       setchangePasswardOtpVerified,
    //       role,setRole
    //     }}
    //   >
    //     {console.log(role)}
    //     <Navbar className=""></Navbar>

    //     <Routes>
    //       <Route path="/" element={<Home></Home>} />

    //       <Route
    //         path="/services"
    //         element={
    //           // <ProtectedRoute>
    //             <Services></Services>
    //           // </ProtectedRoute>
    //         }
    //       />
    //       <Route path="about" element={<About></About>} />
    //       <Route path="/contact" element={<Contact></Contact>} />
    //       <Route path="/login" element={<Login></Login>} />
    //       <Route path="/signup" element={<Signup></Signup>} />
    //       <Route
    //         path="/forgottenpassward"
    //         element={<ForrgottenPassward></ForrgottenPassward>}
    //       />
    //       <Route
    //         path="/changepassward"
    //         element={<Changepassward></Changepassward>}
    //       />
    //       <Route path="/profile" element={
    //         <ProtectedRoute>

    //           <Profile></Profile>
    //         </ProtectedRoute>
    //       } />
    //       <Route
    //         path="/profile/updateprofile"
    //         element={
    //           <ProtectedRoute>

    //             <UpdateProfile></UpdateProfile>
    //           </ProtectedRoute>
    //       }
    //       />
    //       <Route
    //         path="/services/hairandskin"
    //         element={
    //           <ProtectedRoute  >
    //             <HairAndSkinCare></HairAndSkinCare>
    //           </ProtectedRoute>
    //         }
    //       />
    //       <Route
    //         path="/services/weightgain"
    //         element={
    //           <ProtectedRoute>
    //             <WeightGain></WeightGain>
    //           </ProtectedRoute>
    //         }
    //       />
    //       <Route
    //         path="/services/weightloss"
    //         element={
    //           <ProtectedRoute>
    //             <WeightLoss></WeightLoss>
    //           </ProtectedRoute>
    //         }
    //       />
    //       <Route
    //         path="/services/stress"
    //         element={
    //           <ProtectedRoute>
    //             <Stress></Stress>
    //           </ProtectedRoute>
    //         }
    //       />

    //       <Route path="/*" element={<div>Page not exist</div>} />
    //     </Routes>
    //     <ToastContainer className="Toast" />
    //   </UserContext.Provider>

    //   <Footer></Footer>
    // </div>
  );
}

export default App;
export { UserContext };
//exporting our context api
