import homeImage from "../assets/homeImage.png";
import { useState, useEffect } from "react";
import { ReactTyped } from "react-typed";
const Home = () => {
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
  return (
    <div>
      <div className="flex justify-center items-center ">
        <div className="absolute top-29 md:ml-20  left-20">
          <h1 className="font-bold mb-6 text-3xl">
            <ReactTyped strings={["Better Diet ,"]} typeSpeed={220} loop />
            <br></br>
            <ReactTyped strings={["Better Life !!!"]} typeSpeed={220} loop />
          </h1>
          <div className="mb-7">"{quotes}"</div>
        
            <button className="absolute top-30 flex justify-center items-center align-center bg-yellow-300 w-28 h-10 text-center rounded-xl font-bold">Get Started</button>
        </div>
        <img src={homeImage} alt="" />
      </div>
    </div>
  );
};
export default Home;
