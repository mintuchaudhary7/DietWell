import homeImage from "../assets/homeImage.png";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ReactTyped } from "react-typed";
import { UserContext } from "../App";
import { useContext } from "react";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import ProtectedRoute from "./ProtectedRoute";
//  impoorting all the required library
const Home = () => {
  const user = useContext(UserContext);
  const islogin = user.islogin;
  // const [homeImage, setHomeImage] = useState("");
  const setIslogin = user.setIslogin;
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
  // const [currentIndex, setCurrentIndex] = useState(0);
 
  useEffect(() => {
    getRandomQuotes();
   
  }, []);
  // use state for first render
  return (
    // <div className="relative   ">
    //   <div className="flex flex-col md:flex-row justify-center items-center md:space-x-16">
    //     <div className="md:absolute md:top-29 md:left-20 text-center md:text-left">
    //       <h1 className="font-bold mb-6 text-3xl md:text-4xl">
    //         <ReactTyped strings={["Better Diet,"]} typeSpeed={220} loop />
    //         <br />
    //         <ReactTyped strings={["Better Life !!!"]} typeSpeed={220} loop />
    //       </h1>
    //       <div className="mb-7">"{quotes}"</div>
    //       <NavLink to="/services">
    //         <button className="flex justify-center items-center bg-yellow-300 w-28 h-10 text-center rounded-xl font-bold">
    //           Get Started
    //         </button>
    //       </NavLink>
    //     </div>
    //     <div className="w-full md:w-auto md:max-w-lg">
    //       <img src={homeImage} alt="" className="" />
    //     </div>
    //   </div>
    //   {/* Render Services, About, and Contact components below */}
    //   <Services />
    //   <About />
    //   <Contact />
    // </div>
    <div>
      <div
        className="relative min-h-screen bg-right"
        style={{ backgroundImage: `url(${homeImage})` }}
      >
        <div className=" absolute inset-0 bg-opacity-10"></div>
        <div className="absolute inset-0 flex flex-col  justify-center items-center text-white">
          <div className="text-left absolute left-10 ml-10 md:ml-20 mt-20">
            <h1 className="font-bold text-white text-4xl md:text-6xl mb-4">
              <ReactTyped
                strings={["Better Diet,", "Better Life !!!"]}
                typeSpeed={100}
                backSpeed={50}
                loop
              />
            </h1>
            <div className="mb-6 text-white text-xl">{quotes}</div>
            <NavLink to="/services">
              <button className="bg-green-500 hover:bg-green-400 py-2 text-white px-4 rounded-full font-bold text-lg">
                Get Started
              </button>
            </NavLink>
            <NavLink to="/applydietition">
              <button className="bg-green-500 hover:bg-green-400 py-2 text-white px-4 rounded-full font-bold text-lg">
                APPLY DIETITION
              </button>
            </NavLink>
          </div>
        </div>
      </div>
      {/* <ProtectedRoute> */}

       <Services />
      {/* </ProtectedRoute> */}
      <About />
      <Contact />
    </div>
  );
};
export default Home;
