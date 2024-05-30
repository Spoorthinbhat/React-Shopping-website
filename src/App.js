import "./App.css";

import Carousell from "./Components/Carousell.js";
import Footer from "./Footer";
import Header from "./Header";
import Photogrp from "./Photogrp";
import { SlideImage } from "./SlideImage";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Carousell images={SlideImage}></Carousell>
      {/* <Photobunch></Photobunch> */}
      {/* <Photobunch></Photobunch> */}

      <Photogrp></Photogrp>
      <Footer></Footer>
    </div>
  );
}

export default App;
