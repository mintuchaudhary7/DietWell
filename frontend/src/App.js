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
//importing all the components which are required

// const islogin = createContext();
// ye short-hand notation hai context api ke liye working same hai contextapi ke jaise
//context api is used to pass data from one component to its child component whitout nesting 

const UserContext = createContext()
// (() => {});
function App() {
  const [islogin, setIslogin] = useState(false);//  this is used to check user is logged in or not if logged in then we show profile button and logout button else we dont show innitiall it is false because when user first visit our page he is not loged in;
  
  return (
    <div className="h-full ">
      <UserContext.Provider value={{ islogin, setIslogin }}>
        {/* this is syntax used for context api now all the child components can use islogin and Setislogin */}
        <Navbar></Navbar>
        {/* navbar component */}
        <Routes>
          {/* routs are used to move from on component to another by clicking on text or link  */}
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
