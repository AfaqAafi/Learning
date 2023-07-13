import React, { useState } from "react";
import { LOGO_URL } from "../utils/constant";

const Header = () => {
  const [authLog, setAuthLog] = useState("Login");
  return (
    <>
      <div className="header_container">
        <div className="header_left">
          <img src={LOGO_URL} alt="image Logo" />
        </div>
        <div className="header_right">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Cart</a>
            </li>
          </ul>
          <button
            className="auth"
            onClick={() =>
              authLog === "Login" ? setAuthLog("Logout") : setAuthLog("Login")
            }
          >
            {authLog}
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
