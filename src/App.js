
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Global/Header/Header';
import Banner from './Components/Home/Banner/Banner';
import TokenQuality from './Components/Home/Token/TokenQuality';
import Slider from './Components/Home/Slider/Slider';
import TokenSwap from './Components/Home/TokenSwap/TokenSwap';
import Team from './Components/Home/Team/Team';
  // import Swiper JS
  import Swiper from 'swiper';
  // import Swiper styles
  import 'swiper/css';
import Roadmap from './Components/Roadmap/Roadmap';
import Partner from './Components/Partner/Partner';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className='app'>
      <Header></Header>
      <Banner></Banner>
      <TokenQuality></TokenQuality>
      <Slider></Slider>
      <TokenSwap></TokenSwap>
      <Team></Team>
      <Roadmap></Roadmap>
      <Partner></Partner>
      <Footer></Footer>
    </div>
  );
}

export default App;
