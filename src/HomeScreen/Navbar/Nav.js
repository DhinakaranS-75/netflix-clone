import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleshow] = useState(false);
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleshow(true);
    } else {
      handleshow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);
  return (
    <div className={`Nav ${show && "nav_black"}`}>
      <div className="nav_contents">
        <img
          className="nav_logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="nav_img"
        ></img>
        <img
          className="nav_avatar"
          src="https://avatars.githubusercontent.com/u/6759280?v=4"
          alt="nav_avatar"
        ></img>
      </div>
    </div>
  );
}

export default Nav;
