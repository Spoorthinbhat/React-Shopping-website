const Sliderr = ({ images, index, current }) => {
  return (
    <div
      key={index}
      className={index === current ? "container Card-active" : "container"}
    >
      <div className="slider">
        <div
          className="slider-picture"
          style={{ backgroundImage: `url(${images.image})` }}
        ></div>
        <div className="slider-group">
          <div className="slider-description">
            <p id="slider-description-title">{images.title}</p>
            <p id="slider-description-text">{images.text}</p>
          </div>
          <div className="explore">+Explore</div>
        </div>
      </div>
    </div>
  );
};

export default Sliderr;
