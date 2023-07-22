import React, { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.cartItems);

  console.log(cartItems);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="flex bg-white justify-between shadow-lg items-center py-4 lg:py-16 h-16 px-4 lg:px-24">
        <div className="w-10 cursor-pointer gap-2 flex items-center lg:w-24">
          <img
            className="object-fill h-full w-full cursor-pointer"
            src={LOGO_URL}
            alt="image Logo"
          />
          <h1 className="text-3xl text-orange-400">FOODIE</h1>
        </div>
        <div className="flex items-center gap-4">
          <ul className="hidden lg:flex gap-2 text-2xl list-none">
            <li className="mr-3">
              {onlineStatus === true ? "Online 🔵" : "Offline 🔴"}
            </li>
            <li className="mr-3">
              <Link to="/">Home</Link>
            </li>
            <li className="mr-3">
              <Link to="/about">About</Link>
            </li>
            <li className="mr-3">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="mr-3">
              <Link to="/cart">Cart - {cartItems.length} </Link>
            </li>
          </ul>
          <button
            className="py-2 text-2xl w-28 lg:hidden"
            onClick={toggleSidebar}
          >
            ☰
          </button>
        </div>
      </div>
      {isSidebarOpen && (
        <div className="fixed top-20 h-screen right-0 z-50">
          <div className="flex flex-col bg-white w-64 h-full">
            <button className="p-4 text-2xl self-end" onClick={toggleSidebar}>
              ✕
            </button>
            <ul className="flex flex-col gap-4 mt-8 text-xl px-4">
              <li className="mr-3">
                {onlineStatus === true ? "Online 🟢" : "Offline 🔴"}
              </li>
              <li className="mr-3">
                <Link to="/" onClick={() => setIsSidebarOpen(false)}>
                  Home
                </Link>
              </li>
              <li className="mr-3">
                <Link to="/about" onClick={() => setIsSidebarOpen(false)}>
                  About
                </Link>
              </li>
              <li className="mr-3">
                <Link to="/contact" onClick={() => setIsSidebarOpen(false)}>
                  Contact
                </Link>
              </li>
              <li className="mr-3">
                <Link to="/cart" onClick={() => setIsSidebarOpen(false)}>
                  Cart
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
