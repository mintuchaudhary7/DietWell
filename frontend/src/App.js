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

// const islogin = createContext();
const UserContext = createContext();
function App() {
  const [islogin, setIslogin] = useState(false);
  return (
    <div className="h-full ">
      <UserContext.Provider value={{ islogin, setIslogin }}>
        <Navbar className = ""></Navbar>
        
        
        <Routes>
          <Route path="/" element={<Home></Home>} />
          
          <Route path="/services" element={<Services></Services>} />
          <Route path="about" element={<About></About>} />
          <Route path="/contact" element={<Contact></Contact>} />
          <Route path="/login" element={<Login></Login>} />
          <Route path="/signup" element={<Signup></Signup>} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
export { UserContext };
//exporting our context api
