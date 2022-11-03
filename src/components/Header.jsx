import React from "react";
import { useState, useEffect } from "react";
//import images
import profileImg from "../images/profilePic.png";

import instagram from "../images/instagram.png";
import behance from "../images/behance.png";
import zcool from "../images/zcool.png";

function Header() {
  useEffect(() => {
    let header = document.getElementById("logo");
    let nav = document.getElementById("navbar");
    window.onscroll = () => {
      if (window.pageYOffset >= header.offsetHeight) {
        nav.classList.add("sticky");
      } else {
        nav.classList.remove("sticky");
      }
    };
  });

  return (
    <div className="header">
      <div className="profileImgContainer" id="logo">
        <img src={profileImg} alt="" className="profileImg" />
        <div className="name">HUA MIAO MIAO</div>
      </div>
      <div id="navbar">
        {/* first line */}
        <nav className="navbarLine">
          <div className="navItem">Illustration</div>
          <div>•</div>

          <div className="navItem">About Me</div>
          <div>•</div>
          <div className="navItem">Contact</div>
        </nav>
        {/* second line */}
        <nav className="navbarLine">
          <a
            href="https://www.instagram.com/huamiaomiaoillustration/"
            target="_blank"
          >
            <div className="navItem" id="instagram"></div>
          </a>
          <a
            href="https://www.behance.net/miaomiaohua?tracking_source=search_users|%E8%8A%B1%E5%96%B5%E5%96%B5"
            target="_blank"
          >
            <div className="navItem" id="behance"></div>
          </a>
          <a href="https://www.zcool.com.cn/u/22104557" target="_blank">
            <div className="navItem" id="zcool"></div>
          </a>
          <a href="https://weibo.com/u/1760197403" target="_blank">
            <div className="navItem" id="microblog"></div>
          </a>
        </nav>
        {/* <SocialMedia /> */}
      </div>
    </div>
  );
}

export default Header;
