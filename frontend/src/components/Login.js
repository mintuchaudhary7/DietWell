import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext, createContext } from "react";
import { UserContext } from "../App";
const Login = () => {
  const user = useContext(UserContext);
  const islogin = user;
  const setIslogin = user;
  const [Email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const [Passward, setPassward] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    var addUser = { Email, Passward };
    console.log(addUser);

    const response = await fetch("http://localhost:2000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addUser),
    });

    const result = await response.json();

    if (!response.ok) {
      console.log(result.error);
      setError(!error);
      // setError(result.error);
    }
    if (response.ok) {
      console.log(result);

      setEmail("");
      //   setAge(0);

      setPassward("");
      //   setIsSignup(true);

      navigate("/");
      // setIslogin(!islogin);
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
        />

        <label htmlFor="passward">passward</label>
        <input
          id="paswward"
          type="text"
          value={Passward}
          onChange={(e) => setPassward(e.target.value)}
        />
        <button type="submit">submit</button>

        {error ? <div>incorrect passward</div> : <></>}
      </form>
    </div>
  );
};
export default Login;
