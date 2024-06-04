// import casualFrocks from "./CasualFrocks.jpg";
import Mcomponent from "./Components/Mcomponent";
import { MegaSliderImages1 } from "./MegaSliderImages1";
const Megaslider1 = () => {
  return (
    <div className="Megaslider">
      {MegaSliderImages1.map(({ images, discount, description }) => {
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

export default Megaslider1;
