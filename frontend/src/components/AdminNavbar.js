import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const AdminNavbar = () => {
  const nevigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const Logout = async(e)=>{
    e.preventDefault();
    
    const response = await fetch("http://localhost:2000/logout", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      // body: JSON.stringify(),
    });
    const result = await response.json()
    if(!response.ok){
      toast.error(result.message,{
        position : "top-center"
      })
      return
    }
    if(response.ok){
      toast.success(result.message,{
        position : "top-center"
      })
      window.location.reload(false);
      // nevigate('/user');
      return
    }
  }

  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="text-white font-bold">Admin Dashboard</div>
          </div>
          <div className="hidden md:flex items-center">
            <NavLink to="/">
              <button className="text-white hover:text-gray-300 px-3 py-2">
                Dashboard
              </button>
            </NavLink>
            
             
            
            <NavLink to="/users">
              <button className="text-white hover:text-gray-300 px-3 py-2">
                Users
              </button>
            </NavLink>
            <NavLink to="/dietition">
            <button className="text-white hover:text-gray-300 px-3 py-2">
              Dietition
            </button>
            </NavLink>
            <NavLink to="/queries">
            <div className="block text-white w-full text-left px-3 py-2">
              Queries
            </div>
            
          </NavLink>
          <NavLink to="/fetchapplydoctor">
            <div className="block text-white w-full text-left px-3 py-2">
              Doctor Request
            </div>
            
          </NavLink>
          
            <button onClick={Logout} className="text-white hover:text-gray-300 px-3 py-2">
                Logout
              </button>
          </div>
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-300 px-3 py-2"
            >
              Menu
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-700">
          <NavLink to="/">
            <div className="block text-white w-full text-left px-3 py-2">
              Dashboard
            </div>
          </NavLink>
          <NavLink to="/users">
          <button className="block text-white w-full text-left px-3 py-2">
            Users
          </button>
          </NavLink>
          <NavLink to="/dietition">
          <button className="block text-white w-full text-left px-3 py-2">
            Dietition
          </button>
          </NavLink>
          <NavLink to="/queries">
            <div className="block text-white w-full text-left px-3 py-2">
              Queries
            </div>
          </NavLink>
          <NavLink to="/fetchapplydoctor">
            <div className="block text-white w-full text-left px-3 py-2">
              Apply Doctor
            </div>
            
          </NavLink>
          <button onClick={Logout} className="text-white hover:text-gray-300 px-3 py-2">
                Logout
              </button>
        </div>
      )}
    </nav>
  );
};

export default AdminNavbar;
