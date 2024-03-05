import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from "./components/Homepage";
import Login from "./components/Login";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Signup from "./components/Signup";
function App() {
  return (
    <div className = "h-full " >
      <Navbar></Navbar>
      <Routes>
                <Route path="/" element = {<Home></Home>}/>
                <Route path="/services" element = {<Services></Services>}/>
                <Route path="about" element = {<About></About>}/>
                <Route path="/contact" element = {<Contact></Contact>}/>
                <Route path="/login" element = {<Login></Login>}/>
                <Route path="/signup" element = {<Signup></Signup>}/>
          </Routes>
    </div>
  )
}

export default App;
