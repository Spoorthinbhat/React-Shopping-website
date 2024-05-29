import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Sliderr from "./Sliderr";

const Carousell = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const slideRight = () => {
    setCurrent((current + 1) % 5);
  };
  const slideLeft = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
    // setCurrent();
  };

  return (
    <div className="Carousel-wrapper">
      {images.map((image, index) => {
        return (
          <Sliderr
            key={index}
            index={index}
            images={image}
            current={current}
          ></Sliderr>
        );
      })}
      <div id="left" onClick={slideLeft}>
        <FaArrowLeft></FaArrowLeft>
      </div>
      <div id="right" onClick={slideRight}>
        <FaArrowRight></FaArrowRight>
      </div>
    </div>
  );
};

export default Carousell;
