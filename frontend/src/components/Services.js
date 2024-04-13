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

  const checklog = async () => {
    const response = await fetch("http://localhost:2000/services", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const result = await response.json();

    if (!response.ok) {
      nevigate("/login");
      toast.error(result.message, {
        position: "top-center",
      });
      return;
    }
    if (response.ok) {
      return;
    }
  };

  return (
    <div className="bg-orange-100">
      <div
        className="top-24 mb-24 relative max-w-7xl mx-auto px-4 py-8 bg-cover bg-center min-h-screen"
        style={{
          backgroundImage: `url(${image})`,
          filter: "brightness()",
        }}
      >
        <div className="mt-10 absolute inset-0 bg-opacity-50 text-center font-bold text-4xl">
          Our Services
        </div>


      {/* Service Cards Container */}
      <div className="relative z-10 mt-8 top-20 mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {services.map((service) => (
            <NavLink
              key={service.id}
              to={service.to}
              onClick={checklog}
              className="flex justify-center"
            >
              <div className="bg-green-300 shadow-lg rounded-lg p-4 flex flex-col items-center hover:shadow-xl transform transition duration-500 hover:scale-105 cursor-pointer">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-32 h-32 object-cover rounded-full"
                />
                <h3 className="mt-2 font-bold">{service.title}</h3>
                <p className="text-sm text-gray-600 text-center">
                  {service.description}
                </p>
              </div>
            </NavLink>
          ))}
         

        <div className="relative z-10 mt-8 sm:top-48 md:top-48 mb-60 lg:top-60 mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {services.map((service) => (
              <NavLink
                key={service.id}
                to={service.to}
                onClick={checklog}
                className="flex justify-center"
              >
                <div className="bg-orange-300 shadow-lg rounded-lg p-4 flex flex-col items-center hover:shadow-xl transform transition duration-500 hover:scale-105 cursor-pointer">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-32 h-32 object-cover rounded-full"
                  />
                  <h3 className="mt-2 font-bold">{service.title}</h3>
                  <p className="text-sm text-gray-600 text-center">
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
