const Sliderr = ({ images, index, current }) => {
  //   const [autoplay, Setautoplay] = useState(true);
  //   const slideRight = () => {
  //     setCurrent(current == 4 ? 0 : current + 1);
  //   };
  //   let timeout = null;
  //   useEffect(() => {
  //     timeout =
  //       autoplay &&
  //       setTimeout(() => {
  //         slideRight();
  //       }, 3000);
  //   });
  return (
    <div
      key={index}
      className={index === current ? "container Card-active" : "container"}
      //   onMouseEnter={() => Setautoplay(false)}
      //   onMouseLeave={() => Setautoplay(true)}
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
