import React, { useState, useEffect } from "react";
import { Link , useNavigate} from "react-router-dom";
import { useUser } from "../UserContext"; 
import logo_img from "../resources/logo_img.jpg";
import Button from "./Button";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useUser(); 

  useEffect(() => {
    const loggedIn = localStorage.getItem("token"); 
    if (loggedIn) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);   
    }
  }, [setIsLoggedIn]);


  const handleLogout = () => {
    try {
      localStorage.removeItem("token");
      setIsLoggedIn(false);
      navigate("/");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-50 bg-white">
      <div className="md:flex items-center justify-between py-2 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-800">
          <Link to="/">
            <img className="h-16 w-16 md:h-20 md:w-20" src={logo_img} alt="App Logo" />
          </Link>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:static absolute left-0 w-full md:w-auto transition-transform duration-500 ease-in ${
            open ? "top-16 md:top-0" : "top-[-1000px]"
          }`}
        >
          <li className="md:ml-8 text-xl my-7 md:my-0">
            <Link to="/">HOME</Link>
          </li>
          <li className="md:ml-8 text-xl my-7 md:my-0">
            <Link to="/about">ABOUT</Link>
          </li>
          {isLoggedIn ? (
            <button
              className="bg-red-500 text-white py-2 px-6 rounded md:ml-8 hover:bg-red-400 duration-500"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <li className="md:ml-8 text-xl my-7 md:my-0">
              <Button>
                <Link to="/login">Login</Link>
              </Button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
