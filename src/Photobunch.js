import ethinigirl from "./Components/ethinigirl.jpg";
import kidsethenic from "./Components/kidsethnic.jpg";
import kidsethnicmen from "./Components/kidsethnicmen.jpg";
import menethnic from "./Components/menethnic.jpg";
import menwastern from "./Components/menwastern.jpg";
import Photocard from "./Components/photocard";
import westerngirl from "./Components/westerngirl.jpg";
const Photobunch = () => {
  return (
    <div className="photobunch">
      <Photocard
        picture={ethinigirl}
        clothDisc={"Ethnic Wear"}
        discount={"50-80% OFF"}
      ></Photocard>
      <Photocard
        picture={menethnic}
        clothDisc={"Ethnic Wear"}
        discount={"50-80% OFF"}
      ></Photocard>
      <Photocard
        picture={westerngirl}
        clothDisc={"Western Wear"}
        discount={"20-50% OFF"}
      ></Photocard>
      <Photocard
        picture={menwastern}
        clothDisc={"Western wear"}
        discount={"25-45% OFF"}
      ></Photocard>
      <Photocard
        picture={kidsethenic}
        clothDisc={"Ethnic Wear"}
        discount={"50-80% OFF"}
      ></Photocard>
      <Photocard
        picture={kidsethnicmen}
        clothDisc={"Ethnic Wear"}
        discount={"50-80% OFF"}
      ></Photocard>
    </div>
  );
};

export default Photobunch;
