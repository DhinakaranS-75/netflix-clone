import React from "react";
import "./LoginScreen.css";

function LoginScreen() {
  return (
    <div className="loginScreen">
      <div className="loginScreen_background">
        <img
          className="loginScreen_logo"
          src="./Images/logo.png"
          alt="loginScreen_img"
        ></img>

        <button className="loginScreen_button">Login</button>
        <div className="loginScreen_gradient"></div>
      </div>
      
      <div className="loginScreen_body">
        <h1>Laughter. Tears. Thrills. Find it all on Netflix.</h1>
      </div>
    </div>
  );
}

export default LoginScreen;
