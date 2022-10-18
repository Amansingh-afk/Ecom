

import './App.css';
import './assets/css/main.css';
import './assets/css/util.css';


import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import Slider from './components/layout/Slider/Slider';
import Home from './components/Home/Home';
function App() {
  return (
    <>
    <Header />
    <Slider />
    <Home />
    <Footer />
    </>
  );
}

export default App;
