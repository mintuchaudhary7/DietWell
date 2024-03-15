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
// const islogin = createContext();
const UserContext = createContext();
function App() {
  const [changePasswardOtpVerified, setchangePasswardOtpVerified] =
    useState(false);
  const [islogin, setIslogin] = useState(false);
  const logauth = async (e) => {
    // const data = { islogin };
    const response = await fetch("http://localhost:2000", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      // body: JSON.stringify(),
    });
    // const result = await response.json();
    // console.log(result);
    if (!response.ok) {
      setIslogin(false);
      console.log(response);
      return;
    }
    if (response.ok) {
      setIslogin(true);
      console.log("sahil");
      return;
    }
  };

  useEffect(() => {
    logauth();
  }, []);
  return (
    <div className="h-full ">
      <UserContext.Provider
        value={{
          islogin,
          setIslogin,
          changePasswardOtpVerified,
          setchangePasswardOtpVerified,
        }}
      >
        <Navbar className=""></Navbar>

        <Routes>
          <Route path="/" element={<Home></Home>} />

          <Route path="/services" element={<Services></Services>} />
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
          <Route path="/profile" element={<Profile></Profile>} />
        </Routes>
      </UserContext.Provider>

      <Footer></Footer>
    </div>
  );
}

export default App;
export { UserContext };
//exporting our context api
