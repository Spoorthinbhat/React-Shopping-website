import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Megaslider from "../Megaslider";
import Megaslider1 from "../Megaslider1";

const MCarousell = () => {
  const [count, Setcount] = useState(1);
  const slideRight = () => {
    Setcount((count + 1) % 2);
  };
  const slideLeft = () => {
    Setcount(count === 0 ? 2 - 1 : count - 1);
  };
  useEffect(() => {
    setTimeout(() => {
      slideRight();
    }, 10000);
  });
  return (
    <div className="MCarousel-wrapper">
      <div className={count === 0 ? "MCarousell-active" : "MCarousell"}>
        <Megaslider></Megaslider>
      </div>
      <div className={count === 1 ? "MCarousell-active" : "MCarousell"}>
        <Megaslider1></Megaslider1>
      </div>
      <div id="Mleft" onClick={slideLeft}>
        <FaArrowLeft></FaArrowLeft>
      </div>
      <div id="Mright" onClick={slideRight}>
        <FaArrowRight></FaArrowRight>
      </div>
    </div>
  );
};

export default MCarousell;
