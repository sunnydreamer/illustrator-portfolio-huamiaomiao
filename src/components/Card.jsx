import React from "react";
import park from "../images/illustration/park.jpg";

function Card({ img }) {
  return (
    <div>
      <a href={img}>
        <img src={img} alt="" className="cardImg" />
      </a>
    </div>
  );
}

export default Card;
