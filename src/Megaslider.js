// import casualFrocks from "./CasualFrocks.jpg";
import Mcomponent from "./Components/Mcomponent";
import { MegaSliderImages } from "./Components/MegaSliderImages";
const Megaslider = () => {
  return (
    <div className="Megaslider">
      {MegaSliderImages.map(({ images, discount, description }) => {
        return (
          <Mcomponent
            images={images}
            discount={discount}
            description={description}
          ></Mcomponent>
        );
      })}
    </div>
  );
};

export default Megaslider;
