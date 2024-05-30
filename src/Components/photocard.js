const Photocard = ({ picture, clothDisc, discount }) => {
  return (
    <div className="photocard">
      <div
        className="image-container"
        style={{
          backgroundImage: `url(${picture})`,
        }}
      >
        <div className="text-overlay">
          <p id="product">{clothDisc}</p>
          <p id="discount">{discount}</p>
          <p>Shop Now</p>
        </div>
      </div>
    </div>
  );
};

export default Photocard;
