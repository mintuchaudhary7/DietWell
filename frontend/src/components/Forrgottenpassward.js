import { useState } from "react";
import { useNavigate } from "react-router";
// import { use } from "../../../backend/routes/routes";
import { UserContext } from "../App";
import { toast } from "react-toastify";
import { useContext } from "react";
const Forrgottenpassward = () => {
  const user = useContext(UserContext);
  const changePasswardOtpVerified = user.changePasswardOtpVerified;
  const setchangePasswardOtpVerified = user.setchangePasswardOtpVerified;
  const navigate = useNavigate();
  const [Email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [emailsent, setEmailSend] = useState(false);
  const [otpbackend, setotpbackend] = useState("");
  // const[error,setError] = useState(false);
  // const[errormsg,setErrorMsg] = useState("");
  // api call function
  const EmailSubmit = async (e) => {
    e.preventDefault();

    var data = { Email };
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
      toast.error(result.message, {
        position: "top-center",
      });
      // setEmailSend(false);
      // setErrorMsg(result.message)
      // setError(true);
      console.log(result);
    }
    if (response.ok) {
      toast.success(result.showmsg, {
        position: "top-center",
      });
      console.log(result);
      setEmailSend(true);
      // setError(!error)
      setotpbackend(result.message);
      // console.log("otp is"+result.message)
    }
  };
  // verifing otp from backend and frontend for redirection
  const otpSubmit = async (e) => {
    e.preventDefault();
    if (otpbackend === otp) {
      setchangePasswardOtpVerified(true);
      if (changePasswardOtpVerified) {
        navigate("/changepassward");
      }
    } else {
      // setError(true);
      toast.error("Wrong otp please enter again", {
        position: "top-center",
      });
      // setErrorMsg("Wrong otp please enter again")
    }
  };
  return (
    <div className="bg-[#233037] p-8 md:p-32 min-h-screen flex justify-center items-center">
      <div className="max-w-md w-full bg-[#4a5976] p-8 rounded-lg">
        {emailsent ? (
          <form action="" onSubmit={otpSubmit}>
            <label className="block text-white text-sm font-bold mb-2" htmlFor="otp">
              OTP
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
              id="otp"
              type="number"
              placeholder="123456"
              name="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
            <button className="bg-white text-[#233037] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Submit
            </button>
          </form>
        ) : (
          <form action="" onSubmit={EmailSubmit}>
            <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline mb-4"
              id="email"
              type="email"
              placeholder="Email"
              name="email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700 focus:outline-none focus:shadow-outline" type="submit">
              Send OTP
            </button>
          </form>
        )}
      </div>
    </div>
  );
  
};
export default Forrgottenpassward;
