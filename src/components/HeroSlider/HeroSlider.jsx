import React,{useState} from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { ImgData } from '../../Data/HeroSliderData';
import "./HeroSlider.css";


function HeroSlider() {
  const [selected, setSelected] = useState(0);
  const [value, setValue] = useState(0);
  
  const heroImgLength = ImgData.length;
  
  setInterval(() => {
    let randomValue = Math.floor(Math.random()*heroImgLength)
    setValue(randomValue)
  }, 7000);

  return (
    <div className="HeroSlider">
      <div className="heroSlider-container">
        <span onClick={()=>selected === 0 ? setSelected (heroImgLength-1): setSelected((prev)=>prev-1)} className="left-arrow"><FaChevronLeft/></span>
        <span onClick={()=>selected === heroImgLength-1 ? setSelected(0) : setSelected((prev)=>prev+1) } className="right-arrow"><FaChevronRight/></span>
        <div className="image-slider">
          <img src={ImgData[selected].img} alt="ImgData" className="hero-image" />
        </div>
      </div>
    </div>
  );
}

export default HeroSlider;
