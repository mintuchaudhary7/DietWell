import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Signup = ()=>{
    const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [ContactNo, setContactno] = useState(0);
  const [Passward,setPassward] = useState("");
  const [error, setError] = useState(false);
  // declaring usestate variable
 
//navigate 
  const navigate = useNavigate();
    const handleSubmit = async(e)=>{
        e.preventDefault();
        // same sa login 
        // creatingan object which we have to send to backend
    var addUser = { Name, Email, ContactNo,Passward };
    console.log(addUser);
// eslint-disable-next-line no-unused-expressions
// api call same as login
    const response = await fetch("http://localhost:2000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addUser),
    });
    // converting our response to json object
    const result = await response.json();

    if (!response.ok) {
      console.log(result.error);
      setError(true);
      console.log(error);
    }
    if (response.ok) {
      console.log(result);
      setName("");
      setEmail("");
    //   setAge(0);
      setError("");
      setContactno("");
      setPassward("");
      // above we are makink all the feild empty
    //   setIsSignup(true);
    // after signup we go to login and user can login
      navigate("/login");
    }
    }
    return (
        <div>
            <div>Welcome to Signup page</div>
            <form  onSubmit={handleSubmit}>
                
                <label htmlFor="name">Name</label>
                <input id="name" type="text" value={Name}
            onChange={(e) => setName(e.target.value)} />

                <label htmlFor="gmail">gmail</label>
                <input id="gmail" type="email" value={Email}
            onChange={(e) => setEmail(e.target.value)} />

                <label htmlFor="passward">passward</label>
                <input id="paswward" type="text" value={Passward}
            onChange={(e) => setPassward(e.target.value)} />

                <label htmlFor="contact">contact no.</label>
                <input id="contact" type="number" value={ContactNo}
            onChange={(e) => setContactno(e.target.value)} />
            {error ? <div>user already exists</div> : <></>}
                <button type="submit">submit</button>
                {/* same as login */}

            </form>
           

        </div>
        
        
        
    )
}
export default Signup;