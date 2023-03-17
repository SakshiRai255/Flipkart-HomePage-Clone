import './App.css';
import HeroSlider from './components/HeroSlider/HeroSlider';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Product from './components/ProductBar/Product';

function App() {
  return (
    <div className="App">
      <Header/>
      <Menu/>
      <HeroSlider/>
      <Product/>
    </div>
  );
}

export default App;
