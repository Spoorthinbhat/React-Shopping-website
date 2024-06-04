import { DisplayPics } from "../DisplayPics";
import Photocard from "./photocard";

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
