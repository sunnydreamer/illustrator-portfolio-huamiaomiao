import React from "react";
import park from "../images/illustration/park.jpg";

function Card({ img }) {
  return (
    <div>
      <img src={img} alt="" className="cardImg" />
    </div>
  );
}

export default Card;
