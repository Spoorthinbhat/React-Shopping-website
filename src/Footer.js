import Cpolicy from "./Components/Cpolicy";
import Online from "./Components/Online";
import Socialmedia from "./Components/Socialmedia";
import { Subscribe } from "./Components/Subscribe";
import Support from "./Components/Support";
const Footer = () => {
  return (
    <div className="Footer">
      <div className="foot1">
        <div className="footal">
          <div className="foot2">
            <Online></Online>
            <Support></Support>
          </div>
          <Cpolicy></Cpolicy>
        </div>
      </div>
      <div className="foot">
        <Subscribe></Subscribe>
        <Socialmedia></Socialmedia>
      </div>
    </div>
  );
};

export default Footer;
