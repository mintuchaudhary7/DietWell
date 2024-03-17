import { useState } from "react";
import { useNavigate } from "react-router";
// import { use } from "../../../backend/routes/routes";
import { UserContext } from "../App";
import { toast } from "react-toastify";
import { useContext } from "react";
const Forrgottenpassward = () => {
  const user = useContext(UserContext);
  const changePasswardOtpVerified = user.changePasswardOtpVerified;
  const setchangePasswardOtpVerified = user.setchangePasswardOtpVerified
  const navigate = useNavigate()
  const[Email,setEmail] = useState("");
  const[otp,setOtp] = useState("");
  const[emailsent,setEmailSend] = useState(false);
  const[otpbackend,setotpbackend] = useState("");
  // const[error,setError] = useState(false);
  // const[errormsg,setErrorMsg] = useState("");
  // api call function
  const EmailSubmit = async (e) => {
    e.preventDefault();
    
    var data = {Email};
    console.log(data);
    const response = await fetch("http://localhost:2000/forgottenpassward", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  
    const result = await response.json();
    
  //  displaying toast as per response
    if (!response.ok) {
      toast.error(result.message,{
        position:"top-center"
      })
      // setEmailSend(false);
      // setErrorMsg(result.message)
      // setError(true);
      console.log(result)

    }
    if (response.ok) {
      toast.success(result.showmsg,{
        position:"top-center"
      })
      console.log(result);
      setEmailSend(true)
      // setError(!error)
      setotpbackend(result.message)
      // console.log("otp is"+result.message)
    }
  };
  // verifing otp from backend and frontend for redirection
  const otpSubmit = async (e) => {
    e.preventDefault();
    if(otpbackend === otp){
      setchangePasswardOtpVerified(true);
      if(changePasswardOtpVerified){
        navigate("/changepassward");
        
      }
      
    }
    else{
      // setError(true);
      toast.error("Wrong otp please enter again",{
        position:"top-center"
      })
      // setErrorMsg("Wrong otp please enter again")
    }
  };
  return (
    <div>
      {/* {error ? <h1 className="text-red-600">{errormsg}</h1> :<></>} */}
{/* conditional redering for otp page and email page */}
      {emailsent? <form action="" onSubmit={otpSubmit}>
       <label
      className="block text-gray-700 text-sm font-bold mb-2"
      htmlFor="otp"
    >
      otp
    </label>
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="otp"
      type="number"
      placeholder="123456"
      name="otp"
      value={otp}
      onChange={(e) => setOtp(e.target.value)}
      required
    />
   
      <button type="submit">Submit</button>

      </form> :<form action="" onSubmit={EmailSubmit}>
      
    <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="email"
      >
        Email
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="email"
        type="email"
        placeholder="Email"
        name="email"
        value={Email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Submit</button>

      </form>   }
      
     
        
    </div>
    
  )
};
export default Forrgottenpassward;
