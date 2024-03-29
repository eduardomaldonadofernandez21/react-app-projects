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
import TicTacToe from "./components/tic-tac-toe";
import FeatureFlagGlobalState from "./components/feature-flag/context";
import FeatureFlags from "./components/feature-flag";
import UseFetchHookTest from "./components/use-fetch/test";
import UseOnclickOutsideTest from "./components/use-outside-click/test";
import UseWindowResizeTest from "./components/use-window-resize/test";
import ScrollToTopAndBottom from "./components/scroll-to-top-and-bottom";

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
      {/* <SearchAutocomplete/> */}

      {/* Tic tac toe game Component */}
      {/* <TicTacToe/> */}

      {/* Feature Flag IMplementation */}
      {/* <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState>  */}

      {/* useFetch - Custom Hook Test*/}
      {/* <UseFetchHookTest/>  */}

      {/* Use Onclick Outside Hook Test */}
      {/* <UseOnclickOutsideTest/> */}

      {/* Use Window Resize Hook Test */}
      {/* <UseWindowResizeTest/> */}

      {/* Scroll to Top and Bottom */}
      <ScrollToTopAndBottom/>

    </div>
  );
}

export default App;
