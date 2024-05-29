const Photocard = ({ picture, clothDisc, discount }) => {
  return (
    <div className="photocard">
      {/* <div className="card"> */}
      <div
        className="image-container"
        style={{
          backgroundImage: `url(${picture})`,
        }}
      >
        <div className="text-overlay">
          <p>{clothDisc}</p>
          <p>{discount}</p>
          <p>Shop Now</p>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Photocard;
