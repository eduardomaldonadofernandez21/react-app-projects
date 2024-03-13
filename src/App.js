import logo from './logo.svg';
import './App.css';
import Accordian from './components/accordian';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider';
import LoadMoreData from './components/load-more-data';
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
import QRCodeGenerator from './components/qr-code-generator';

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
      {/*<ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"3"}
        limit={"5"}
      /> */}
      {/* Load more products Component*/}
      {/*<LoadMoreData/>*/}

      {/* Tree view component Component*/}
      {/*<TreeView menus={menus} />*/}

      {/* QR Code generator Component*/}
      <QRCodeGenerator/>
    </div>
  );
}

export default App;
