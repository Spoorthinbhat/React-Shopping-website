import "./App.css";
// import Carousel from "./Components/carousel.js";
import Carousell from "./Components/Carousell";
import Footer from "./Footer";
import Header from "./Header";
import { SlideImage } from "./SlideImage";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Carousell images={SlideImage}></Carousell>
      <Footer></Footer>
      {/* <Slider></Slider> */}
    </div>
  );
}

export default App;
