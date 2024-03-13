import logo from "./logo.svg";
import "./App.css";
import Accordian from "./components/accordian";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
import QRCodeGenerator from "./components/qr-code-generator";
import LightDarkMode from "./components/light-dark-mode";
import ScrollIndicator from "./components/scroll-indicator";
import TabTest from "./components/custom-tabs/tab-test";
import ModalTest from "./components/custom-modal-popup/modal-test";
import GithubProfileFinder from "./components/github-profile-finder";
import SearchAutocomplete from "./components/search-autocomplete-with-api";

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
      {/*<QRCodeGenerator/>*/}

      {/* light and dark theme switch */}
      {/* <LightDarkMode /> */}

      {/* Scroll Indicator Component */}
      {/* <ScrollIndicator  url={"https://dummyjson.com/products?limit=100"} />  */}
    
      {/* Custom Tabs Component */}
      {/* <TabTest/> */}

      {/* Modal PopUp Component */}
      {/* <ModalTest/> */}

      {/* Github profile finder Component */}
      {/* <GithubProfileFinder/> */}

      {/* Search autocomplete with API Component */}
      <SearchAutocomplete/>
    </div>
  );
}

export default App;
