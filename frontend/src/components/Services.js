import { useState } from "react";
import services from "../assets/Services";
import image from "../assets/servicebg.png";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Services = () => {
  const nevigate = useNavigate();
  const [middleware, setMiddleware] = useState("");
  const [middlewareresponse, setmiddlewarerespnse] = useState(false);

  return (
    <div className="bg-[#233037] pb-1">
      <div
        className="top-24 mb-24 relative max-w-7xl mx-auto px-4 py-8 bg-cover bg-center min-h-screen"
        style={{
          // backgroundImage: `url(${image})`,
          filter: "brightness()",
        }}
      >
        <div className="text-white absolute inset-0 bg-opacity-50 text-center font-bold text-4xl">
          Our Services
        </div>

        <div className="bg-[#4a5976] flex flex-col items-center py-8  mt-12 px-[2px] rounded-md">
          <div className="text-white text-xl font-bold text-center mb-8">
            <p className="text-xs text-green-500">How It Works</p>
            <h3>3 Easy Steps For Happy Life</h3>
          </div>

          <div className="text-white font-bold text-center flex space-x-1 lg:space-x-4">
            <div className="bg-[#233037] py-2 px-4 rounded-md border-2 border-green-500 text-xs ">
              Get Diet Plan
            </div>

            <div className="bg-[#233037] py-2 px-4 rounded-md border-2 border-green-500 text-xs">
              Follow Diet Plan
            </div>

            <div className="bg-[#233037] py-2 px-4 rounded-md border-2 border-green-500 text-xs">
              Happy Life
            </div>
          </div>
        </div>

        <NavLink className="relative flex justify-end mt-4 mr-4" to="/user-dietition-question">
        <img
          className="h-12 w-12 rounded-2xl hover:"
          height={100}
          width={100}
          src="https://cdn.pixabay.com/photo/2015/11/06/11/51/question-mark-1026526_640.jpg"
          alt="chat with doctor"
        />
      </NavLink>

        <div className="relative mt-10 z-10 sm:top-16 md:top-16 mb-20 lg:top-8">
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {services.map((service) => (
              <NavLink
                key={service.id}
                to={service.to}
                className="flex justify-center"
              >
                <div className="bg-[#4a5976]  shadow-lg rounded-lg p-4 flex flex-col items-center hover:shadow-xl transform transition duration-500 hover:scale-105 cursor-pointer">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-32 h-32 object-cover rounded-full"
                  />
                  <h3 className="mt-2 font-bold">{service.title}</h3>
                  <p className="text-sm text-white text-center">
                    {service.description}
                  </p>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Services;
