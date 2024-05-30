import Photocard from "./Components/photocard";
import { DisplayPics } from "./DisplayPics";

const Photogrp = () => {
  return (
    <div className="photobunch">
      {DisplayPics.map(({ picture, clothDisc, discount }) => {
        return (
          <Photocard
            picture={picture}
            clothDisc={clothDisc}
            discount={discount}
          ></Photocard>
        );
      })}
    </div>
  );
};

export default Photogrp;
