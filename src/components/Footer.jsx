import React from "react";

function Footer() {
  return (
    <div>
      <div className="socialMedia">
        <div className="socialMediaItem">
          <img src={instagramImg} alt="" className="icon" />
        </div>
        <div className="socialMediaItem">
          <img src={behanceImg} alt="" className="icon" />
        </div>
        <div className="socialMediaItem">
          <img src={zcoolImg} alt="" className="icon" />
        </div>
        <div className="socialMediaItem">Share</div>
      </div>
    </div>
  );
}

export default Footer;
