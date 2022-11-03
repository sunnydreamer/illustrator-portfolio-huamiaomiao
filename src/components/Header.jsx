import React from "react";
//import images
import profileImg from "../images/profilePic.png";
import instagramImg from "../images/instagram.png";
import behanceImg from "../images/behance.png";
import zcoolImg from "../images/zcool.png";

function Header() {
  return (
    <div>
      <div className="profileImgContainer">
        <img src={profileImg} alt="" className="profileImg" />
        <div className="name">HUA MIAO MIAO</div>
      </div>
      <nav className="navbar">
        <div className="navItem">Illustration</div>
        <div>•</div>

        <div className="navItem">About Me</div>
        <div>•</div>
        <div className="navItem">Contact</div>
      </nav>
    </div>
  );
}

export default Header;
