import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";

const Stress = () => {
  const [menu1, setMenu1] = useState("");
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

  const stress = async () => {
    const response = await fetch("http://localhost:2000/services/stress", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      // body: JSON.stringify(),
    });

    const result = await response.json();
    console.log(response);
    if (!response.ok) {
      console.log(result.message);
      toast.error(result.message,{
        position:"top-center"
      })
      // setMenu1(result.message);
      // setResgot(true);
      return;
    }
    if (response.ok) {
      console.log(result.data)
      var x = await JSON.parse(result.data.function_call.arguments);
      console.log(x);
      setMenu1(x);
      console.log(x);
      setResgot(true);
      return;
    }
  };
  useEffect(() => {
    stress();
  }, []);
  const FlipCard = ({ title, content }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
      setIsFlipped(!isFlipped);
    };

    return (
      <div className=" w-full sm:w-1/2 lg:w-1/3 p-4">
        <div
          className="relative w-full h-80 bg-red-100 shadow-md rounded-lg overflow-hidden border border-gray-200 cursor-pointer"
          onClick={handleFlip}
        >
          <div
            className={`absolute top-0 left-0 w-full h-full transform transition-transform duration-500 ${
              isFlipped ? "rotate-y-180" : ""
            }`}
          >
            <div className="bg-[#4a5976] w-full h-full flex justify-center items-center">
              <div className="text-center px-4 py-6">
                <h2 className="text-lg lg:text-xl font-semibold mb-4">
                  {title}
                </h2>
                {isFlipped && (
                  <ul className="text-sm lg:text-base">
                    {content &&
                      Object.entries(content).map(([key, value]) => (
                        <li key={key}>
                          {key}: {value}
                        </li>
                      ))}
                  </ul>
                )}
              </div>
            </div>
            <div className="bg-white w-full h-full flex justify-center items-center">
              <div className="text-center px-4 py-6">
                <h2 className="text-lg lg:text-xl font-semibold mb-4">
                  Response
                </h2>
                {/* Add response here */}
              </div>
            </div>
          </div>
          {!isFlipped && (
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
              <div className="text-center px-4 py-6">
                <h2 className="text-lg lg:text-xl font-semibold mb-4">
                  {title}
                </h2>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };
  return (
    <div className="bg-[#233037] min-h-screen pt-24 text-white">
      
      Welcome to weight gain
      {resgot ? (
        <div className="container mx-auto py-8 px-4">
          <div className="flex flex-wrap -mx-4">
            {console.log(menu1)}
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
export default Stress;
