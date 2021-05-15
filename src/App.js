import './App.css';
import MenuPage from './Components/Menu';
// import ink4k from 'http://fifteenltd.com/assets/videos/ink4k.mov';

import poster from './assets/poster.jpg';
import posterDesktop from './assets/poster-desktop.jpg';
import UseMobilePoster from "./Hooks/UseMobilePoster"

// import MenuPage from './Components/MenuDynamic';
// import { useQuery } from "react-query";

function App() {
  //todo create function to dectect screen size and output wither a video or a poster
  // const newVideo = 'https://justin-d-volk.wistia.com/medias/ikhsynt2p7'
  const ink4k = "http://fifteenltd.com/assets/videos/ink4k.mov";
  return (
    <div className="App">
      <header className="App-header">
      {/* {window.innerWidth && UseMobilePoster(ink4k, poster, posterDesktop)} */}
      {window.innerWidth && UseMobilePoster(ink4k, poster, posterDesktop)}
    {/* <video className="video" playsInline autoPlay muted loop poster={poster} srcmob={poster}> <source src={video} type='video/mp4' /> </video>  */}
        <MenuPage />
      </header>
    </div>
  );
}

export default App;
