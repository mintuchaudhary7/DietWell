import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";

const HairandSkincare = () => {
  const [menu1, setMenu1] = useState({});
  const [resgot, setResgot] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const handleClick = (day) => {
    setSelectedDay(day);
  };
  const hairandskindata = async () => {
    const response = await fetch(
      "http://localhost:2000/services/haireandskincare",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        // body: JSON.stringify(),
      }
    );

    const result = await response.json();

    if (!response.ok) {
      // setMenu1(result.message);
      toast.error(result.message,{
        position:"top-center"
      })
      console.log("abc")
      return;
    }
    if (response.ok) {
      var x = await JSON.parse(result.data.function_call.arguments);
      setMenu1(x);
      console.log(x)
      setResgot(true);
      return;
    }
  };
  useEffect(() => {
    hairandskindata();
  }, []);
 
  const FlipCard = ({ title, content }) => {
    const [isFlipped, setIsFlipped] = useState(false);
  
    const handleFlip = () => {
      setIsFlipped(!isFlipped);
    };
  
    return (
      <div className=" w-full  sm:w-1/2 lg:w-1/3 p-4">
        {console.log(menu1)}
        <div className="relative w-full h-80 bg-[#4a5976] shadow-md rounded-lg overflow-hidden border border-gray-200 cursor-pointer" onClick={handleFlip}>
          <div className={`absolute top-0 left-0 w-full h-full transform transition-transform duration-500 ${isFlipped ? 'rotate-y-180' : ''}`}>
            <div className="bg-[#4a5976]w-full h-full flex justify-center items-center">
              <div className="text-center px-4 py-6">
                <h2 className="text-lg lg:text-xl font-semibold mb-4">{title}</h2>
                {isFlipped && (
                  <ul className="text-sm lg:text-base">
                    {content && Object.entries(content).map(([key, value]) => (
                      <li key={key}>{key}: {value}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            <div className="bg-white w-full h-full flex justify-center items-center">
              <div className="text-center px-4 py-6">
                <h2 className="text-lg lg:text-xl font-semibold mb-4">Response</h2>
                {/* Add response here */}
              </div>
            </div>
          </div>
          {!isFlipped && (
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
              <div className="text-center px-4 py-6">
                <h2 className="text-lg lg:text-xl font-semibold mb-4">{title}</h2>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };
  // export default MenuCategory;
  return (
    <div className="bg-[#233037] text-white pt-24 min-h-screen">
      
      <h2>Welcome to Hair and Skin Care</h2>
      
      {resgot ? (
      
          // <div>{console.log(menu1)}</div>
          <div className=" container mx-auto py-8 px-4">
          <div className="flex flex-wrap -mx-4">
            {Object.entries(menu1).map(([key, value]) => (
              <FlipCard key={key} title={key} content={value} />
            ))}
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
      
    </div>
  );
};
export default HairandSkincare;
