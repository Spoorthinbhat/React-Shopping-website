import { FaSearch } from "react-icons/fa";
import { FaBagShopping, FaFaceSmile, FaHeart } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="Header">
      <div>MEN</div>
      <div>WOMEN</div>
      <div>KIDS</div>
      <div>HOME & LIVING</div>
      <div>BEAUTY</div>
      <div>STUDIO</div>
      <div className="searchbox">
        <FaSearch role="button" id="search"></FaSearch>
        <input
          type="text"
          placeholder="Search for products, brands and more"
        ></input>
      </div>
      <div class="icon">
        <FaFaceSmile id="face"></FaFaceSmile>
        <div id="discription">Profile</div>
      </div>
      <div class="icon">
        <FaHeart id="heart"></FaHeart>
        <div id="discription">Wishlist</div>
      </div>
      <div class="icon">
        <FaBagShopping id="shopping"></FaBagShopping>
        <div id="discription">Bag</div>
      </div>
    </div>
  );
};

export default Header;
