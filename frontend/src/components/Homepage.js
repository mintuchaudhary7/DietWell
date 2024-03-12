import homeImage from "../assets/homeImage.png";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ReactTyped } from "react-typed";
import { UserContext } from "../App";
import { useContext } from "react";
import About from "./About";
import Contact from "./Contact";
//  impoorting all the required library
const Home = () => {
  const user = useContext(UserContext);
  const  islogin = user.islogin
  const setIslogin  = user.setIslogin;
  // fetching data from context api
  const [quotes, setQuotes] = useState("");
  //   fuction for geerating random quotes
  const getRandomQuotes = async () => {
    // try catch block is for cathing the erros
    try {
      // making a api call
      const response = await fetch("https://type.fit/api/quotes");
      // converting the response to json
      const result = await response.json();
      // console.log(result);
      // creating a randon number
      const randomNum = Math.floor(Math.random() * 16) + 1;
      // console.log(randomNum)
      // console.log(result[randomNum].text)
      // destructureing the json
      setQuotes(result[randomNum].text);
      // settinf the quotes
      console.log(quotes);
    } catch (error) {
      setQuotes("Network error");
    }
  };
  useEffect(() => {
    getRandomQuotes();
  }, []);
  // use state for first render
  return (
    <div>
      <div className="flex justify-center items-center ">
        <div className="absolute top-29 md:ml-20  left-20">
          <h1 className="font-bold mb-6 text-3xl">
            <ReactTyped strings={["Better Diet ,"]} typeSpeed={220} loop />
            <br></br>
            <ReactTyped strings={["Better Life !!!"]} typeSpeed={220} loop />
            {/* this is library for animation */}
          </h1>
          <div className="mb-7">"{quotes}"</div>
           <NavLink to="/services"><button className="absolute top-30 flex justify-center items-center align-center bg-yellow-300 w-28 h-10 text-center rounded-xl font-bold">Get Started</button></NavLink>
          {/* conditional rendoring if user is loged in then he will access the services page else we ask him to log in */}
            
        </div>
        <img src={homeImage} alt="" />
      </div>
      <About></About>
      <Contact></Contact>
    </div>
  );
};
export default Home;
