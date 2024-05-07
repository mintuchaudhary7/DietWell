import React, { useState } from 'react';
import { UserContext } from '../App';
import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { toast } from "react-toastify";
const PasswordChangePage = () => {
  const navigate = useNavigate()
  const user = useContext(UserContext);
  const changePasswardOtpVerified = user.changePasswardOtpVerified;
  const setchangePasswardOtpVerified = user.setchangePasswardOtpVerified
  const [Email, setEmail] = useState('');
  const [Passward, setPassward] = useState('');
  const [confirmPassward, setConfirmPassward] = useState('');
  // const [errorMessage, setErrorMessage] = useState('');
  // const[error,setError] = useState(false);
  // for onchange handling any changes in input feild will reflected immediatly and this is helpful because on time of submission our app shaoud not care about gathering data it directly send the data and data is latest
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassward(e.target.value);
  };

  const  handleConfirmPasswordChange = (e) => {
    setConfirmPassward(e.target.value);
  };
// submit handler for sending response to backend
  const handleSubmit = async(e) => {
    e.preventDefault();// preventing default reload beheviour of button
    // checking passward and confirm passward is same ot not
    if (Passward !== confirmPassward) {
      toast.error("Passward and Confirm passward not matched")
      return
      // setErrorMessage("Passwords don't match");
      // setError(true);
    } else {
      // Reset error message and handle password change logic
      // setErrorMessage('');
      // Handle password change logic here...
    }
    // data which we send to backend
    var data = {Email,Passward}
    console.log(data);
    //  api call and request is put because we are prforming update operation
    const response = await fetch("http://localhost:2000/changepassward", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    // below we are handling the response and error and toast 
    const result = await response.json();
    if (!response.ok) {
     toast.error(result.message,{
      position:'top-center'
     })
      // setEmailSend(false);
      // setErrorMessage(result.message)
      // setError(true);
      // console.log(result.message)

    }
    if (response.ok) {
      // console.log(result);
      // setError(true)
      toast.success(result.message,{
        position:'top-center'
      })
      navigate('/login')
    }
  };

  return (
   <div className='bg-[#233037] min-h-screen pt-28 text-white text-center text-2xl'>
    {
      // conditional rendering if our user is not verifieed with otp we render the page which say user to verify via otp help in url parshing from attackers
      changePasswardOtpVerified ?  <div className=" min-h-screen flex items-center justify-center sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className=" text-center text-3xl font-extrabold">
            Change Password
          </h2>
          {/* {error ? <h1 className='text-red-600'>{errorMessage}</h1>:<h1></h1>} */}
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={Email}
                onChange={handleEmailChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={Passward}
                onChange={handlePasswordChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="New Password"
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="sr-only">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="confirm-password"
                required
                value={confirmPassward}
                onChange={handleConfirmPasswordChange}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Confirm Password"
              />
            </div>
          </div>
        
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Change Password
            </button>
          </div>
        </form>
      </div>
    </div>:<h1 className='text-red-700'>Please verify yourself via otp</h1>
    // </div>
   
    }
   </div>
      
    
  );
};

export default PasswordChangePage;
