const Mcomponent = ({ images, discount, description }) => {
  return (
    <div
      className="Megaslider-photo"
      style={{ backgroundImage: `url(${images})` }}
    >
      <div className="Megaslider-text">
        <p>{description}</p>
        <p>{discount}</p>
      </div>
    </div>
  );
};

export default Mcomponent;
