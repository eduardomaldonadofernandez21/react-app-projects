import logo from './logo.svg';
import './App.css';
import Accordian from './components/accordian';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider';

function App() {
  return (
    <div className="App">
      {/* Accordian Component*/}
      {/*<Accordian/>*/}

      {/* Random Color Component*/}
      {/* <RandomColor/> */}

      {/* Star rating Component*/}
      {/*<StarRating/> */}

      {/* Image Slider Component*/}
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"3"}
        limit={"5"}
      />
    </div>
  );
}

export default App;
