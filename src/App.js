import './App.css';
import HeroSlider from './components/HeroSlider/HeroSlider';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Product from './components/ProductBar/Product';
import Product2 from './components/ProductBar/Product2';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Menu/>
      <HeroSlider/>
      <Product/>
      <Product2/>
      <Footer/>
    </div>
  );
}

export default App;
