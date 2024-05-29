// import bag from "./bag.jpg";
// import menswatch from "./menswatch.png";

const Slider = ({ images }) => {
  return (
    <div className="container">
      <div className="slider">
        <div
          className="slider-picture"
          style={{ backgroundImage: `url(${images.image})` }}
        ></div>
        <div className="slider-group">
          <div className="slider-description">{images.title}</div>
          <div className="explore">+Explore</div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
