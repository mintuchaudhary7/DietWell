import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext, createContext } from "react";
import { UserContext } from "../App";
// importing the components which are required
const Login = () => {
  const user = useContext(UserContext);
  //  same again ham destructure krr rhe hai jaise navbar me kiya the
  const islogin = user.islogin;
  const setIslogin = user.setIslogin;
  const [Email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [Passward, setPassward] = useState("");
  // creating a usestate variable read usestate and useeffect form we3schools
  const navigate = useNavigate();//navigete for moving form one rout to another
  const handleSubmit = async (e) => {
    e.preventDefault();
    //default behevior is to reload the page and we are prventing fro reloding the page
    var addUser = { Email, Passward };//creating an object email and passward which we have to send on backend for maching with data is stored in backend;
    // this is used to make call for backend server
    const response = await fetch("http://localhost:2000/login", {
      method: "POST", //post request because we are sending data to backend
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addUser),//we can say this is type or body parser use to json -> string
    });
    const result = await response.json();//await is used because function is async and it takes some time
// if any error occur in backend this block executed
    if (!response.ok) {
      console.log(result.error);
      setError(true);
      //setting  error because we have to display error that user entered wrong passward
      // setError(result.error);
    }
    if (response.ok) {
      console.log(result);
      // making all the feilds empty
      setEmail("");
      setPassward("");
      // making isloggin true because if passward matches then used is logged in and we have to show profile route in navebar 
      setIslogin(true);
      //  and finally out log in success then user ko home route pe chala jayega using nevigate
      navigate("/");
    
    }
  };
  return (
    <div>
      <div>Welcome to login page</div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="gmail">gmail</label>
        <input
          id="gmail"
          type="email"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
          // this is use for is our user change anything to form it immidiatly updates the value and when user click submit button then aur browser dont need to collect data from here and there is help to increase response time of website
        />

        <label htmlFor="passward">passward</label>
        <input
          id="paswward"
          type="text"
          value={Passward}
          onChange={(e) => setPassward(e.target.value)}
        />
        <button type="submit">submit</button>
        {/* agaim here is another conditional rendoring if we get any error  then we rendor incorrect passward or email tag */}
        {error ? <div>Incorrect passward or gmail</div> : <></>}
      </form>
    </div>
  );
};
export default Login;
