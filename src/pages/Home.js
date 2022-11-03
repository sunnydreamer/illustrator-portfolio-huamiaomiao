import React from "react";
import Card from "../components/Card";

// import images
import halloween from "../images/illustration/halloween.jpg";
import halloween2 from "../images/illustration/halloween2.jpg";
import fox from "../images/illustration/fox.jpg";
import coupleFlower from "../images/illustration/coupleFlower.jpg";
import reading from "../images/illustration/reading.jpg";
import car from "../images/illustration/car.jpg";
import rabbit from "../images/illustration/rabbit.jpg";
import park from "../images/illustration/park.jpg";
import park2 from "../images/illustration/park2.jpg";
import oldCouple from "../images/illustration/oldCouple.jpg";
import christmas from "../images/illustration/christmas.jpg";
import birthday from "../images/illustration/birthday.jpg";

function Home() {
  const imgList = [
    christmas,
    car,
    park,
    park2,
    birthday,
    oldCouple,
    reading,
    rabbit,
    halloween2,
  ];

  return (
    <div>
      <div class="grid-container">
        {imgList.map((product, i) => (
          <div key={i}>
            <Card img={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
