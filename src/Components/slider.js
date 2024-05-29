// import bag from "./bag.jpg";
// import menswatch from "./menswatch.png";
import shoes from "./sliderPhotos/shoes.jpg";

const Slider = () => {
  return (
    <div className="container">
      <div className="slider">
        <div
          className="slider-picture"
          style={{ backgroundImage: `url(${shoes})` }}
        ></div>
        <div className="slider-group">
          <div className="slider-description">Handbags</div>
          <div className="explore">+Explore</div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
