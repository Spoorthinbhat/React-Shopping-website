import ethinigirl from "./ethinigirl.jpg";

const Photocard = ({ picture, clothDisc, discount }) => {
  return (
    <div className="photocard">
      <div className="card">
        <div
          className="image-container"
          style={{
            backgroundImage: `url(${ethinigirl})`,
          }}
        >
          <div className="text-overlay">
            <p>Ethnic Wear</p>
            <p>50-80% OFF</p>
            <p>Shop Now</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photocard;
