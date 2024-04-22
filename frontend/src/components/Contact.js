import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
// impoorting all the required library
const Contact = () => {
  const [Email, setEmail] = useState("");
  const [ContactNo, setContactno] = useState("");
  const [Name, setName] = useState("");
  const [Query, setQuery] = useState("");
  const [Response, setResponse] = useState("");
  const [boolresponse, setboolresponse] = useState(false);
  const navigate = useNavigate();

  // creating the variables
  const handleSubmit = async (e) => {
    e.preventDefault();
    // prevent default help to prevent default function of reload
    // creatinga n object which we have to send to backend
    var addUser = { Name, Email, ContactNo, Query };
    console.log(addUser);

    // api call where we have to send data
    const response = await fetch("http://localhost:2000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(addUser),
    });

    // converting our response to json object
    const result = await response.json();
// response handling
    if (!response.ok) {
      // let message;
      toast.error(result.message,{
        position:"top-center"
      })
      // setboolresponse(true)
      // setResponse(result.message);
      // console.log(result.message);
      return;
      // setResponse("sahil")
      // if any error reciveed from backend
    }
    if (response.ok) {
      // console.log(result);
      // setResponse(result.message);
      // setboolresponse(true);
      toast.success(result.message,{
        position:"top-center"
      })
      setName("");
      setEmail("");

      setContactno("");
      setQuery("");
      // if ervery thing is fine we set all values to empty
      // navigate('/contact')
      return;
      // and return
    }
  };
  return (
    <div className="bg-[#233037] py-20">
      <div className="max-w-lg mx-auto">
        <h2 className="text-3xl text-white font-semibold mb-8">Contact Us</h2>
        {/* {boolresponse ? <h1 className="text-green-700">{Response}</h1> : <></>} */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="fullname" className="block mb-1 text-white">
              Name
            </label>
            <input
              type="text"
              className="w-full border rounded-md px-4 py-2"
              placeholder="Sahil Singh"
              name="fullName"
              id="fullname"
              value={Name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 text-white">
              Email
            </label>
            <input
              type="email"
              className="w-full border rounded-md px-4 py-2"
              placeholder="abc@example.com"
              name="email"
              id="email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="contact" className="block mb-1 text-white">
              Contact No
            </label>
            <input
              type="Number"
              className="w-full border rounded-md px-4 py-2"
              placeholder="7318573930"
              name="contact"
              id="contact"
              value={ContactNo}
              onChange={(e) => setContactno(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="query" className="block mb-1 text-white">
              Message
            </label>
            <textarea
              className="w-full border rounded-md px-4 py-2"
              rows="5"
              placeholder="Your Question"
              name="query"
              id="query"
              value={Query}
              onChange={(e) => setQuery(e.target.value)}
              required
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Contact;
