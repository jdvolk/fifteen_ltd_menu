import './App.css';
import MenuPage from './Components/Menu';
import video from './assets/ink4k.mov';
import poster from './assets/poster.jpg';
import UseMobilePoster from "./Hooks/UseMobilePoster"
// import MenuPage from './Components/MenuDynamic';
// import { useQuery } from "react-query";

function App() {
  //todo create function to dectect screen size and output wither a video or a poster
  
  return (
    <div className="App">
      <header className="App-header">
      {window.innerWidth && UseMobilePoster(video,poster)}
    {/* <video className="video" playsInline autoPlay muted loop poster={poster} srcmob={poster}> <source src={video} type='video/mp4' /> </video>  */}
        <MenuPage />
      </header>
    </div>
  );
}

export default App;
