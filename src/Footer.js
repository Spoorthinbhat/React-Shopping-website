import Cpolicy from "./Components/Cpolicy";
import Online from "./Components/Online";
import Socialmedia from "./Components/Socialmedia";
import { Subscribe } from "./Components/Subscribe";
import Support from "./Components/Support";
const Footer = () => {
  return (
    <div className="Footer">
      <div className="foot1">
        <Online></Online>
        <Support></Support>
        <Cpolicy></Cpolicy>
      </div>
      <div className="foot">
        <Subscribe></Subscribe>
        <Socialmedia></Socialmedia>
      </div>
    </div>
  );
};

export default Footer;
