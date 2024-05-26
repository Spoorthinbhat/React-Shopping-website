import {
  FaFacebook,
  FaGooglePlus,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Socialmedia = () => {
  return (
    <div className="Socialmedia">
      <FaFacebook role="button" id="facebook"></FaFacebook>
      <FaInstagram role="button" id="instagram"></FaInstagram>
      <FaTwitter role="button" id="twitter"></FaTwitter>
      <FaGooglePlus role="button" id="googleplus"></FaGooglePlus>
      <FaYoutube role="button" id="Youtube"></FaYoutube>
    </div>
  );
};

export default Socialmedia;
