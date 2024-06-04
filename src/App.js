import "./App.css";

import Carousell from "./Components/Carousell.js";
import Footer from "./Footer";
// import Footer from "./Components/Footer.js";
import Photogrp from "./Components/Photogrp.js";
import Header from "./Header";
import { SlideImage } from "./SlideImage";
// import Mcomponent from "./Components/Mcomponent";
// import Megaslider from "./Components/Megaslider";
// import Megaslider1 from "./Components/Megaslider1";
import MCarousell from "./Components/MCarousell.js";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Carousell images={SlideImage}></Carousell>
      <MCarousell></MCarousell>
      {/* <Mcomponent></Mcomponent> */}
      {/* <Megaslider></Megaslider>
      <Megaslider1></Megaslider1> */}

      <p className="category-font">
        SHOP BY <span style={{ color: "navy" }}>CATEGORY</span>
      </p>
      <Photogrp></Photogrp>

      <Footer></Footer>
    </div>
  );
}

export default App;
