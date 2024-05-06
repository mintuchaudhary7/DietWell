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
    <div className="bg-[#233037]">
      <div
        className="top-24 mb-24 relative max-w-7xl mx-auto px-4 py-8 bg-cover bg-center min-h-screen"
        style={{
          backgroundImage: `url(${image})`,
          filter: "brightness()",
        }}
      >
        <div className="text-white absolute inset-0 bg-opacity-50 text-center font-bold text-4xl">
          Our Services
        </div>

        <div className="text-white text-xl relative top-32 font-bold text-center">
          <p className="text-xs text-green-500">How It Works</p>
          <h3>3 Easy Steps For Happy Life</h3>
        </div>

        <div className="text-white relative ml-60 mr-60 top-40 font-bold text-center flex justify-evenly">
          <div className="bg-[#233037] py-2 px-4 rounded-md border-2 border-[#233037] text-xs hover:border-green-500">
            Get Diet Plan
          </div>

          <div className="bg-[#233037] py-2 px-4 rounded-md border-2 border-[#233037] text-xs hover:border-green-500">
            Follow Diet Plan
          </div>

          <div className="bg-[#233037] py-2 px-4 rounded-md border-2 border-[#233037] text-xs hover:border-green-500">
            Happy Life
          </div>
        </div>

        <div className="relative mt-10 z-10 sm:top-48 md:top-48 mb-60 lg:top-60 mb-20">
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
      <NavLink className="" to="/user-dietition-question">
        <img className="" height={100} width={100} src="https://cdn.pixabay.com/photo/2015/11/06/11/51/question-mark-1026526_640.jpg" alt="no" />

      </NavLink>
    </div>
  );
};

export default Services;
