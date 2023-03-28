import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ImgData } from "../../Data/HeroSliderData";
import "./HeroSlider.css";

// PreviousBtn Of Hero Slider function

const PreviousBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <FaChevronLeft style={{ color: "#000", fontSize: "30px" }} />
    </div>
  );
};

// NextBtn Of Hero Slider function

const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <FaChevronRight style={{ color: "#000", fontSize: "30px" }} />
    </div>
  );
};

function HeroSlider() {
  return (
    <div style={{ margin: "20px",textAlign:"center"}}>
      <div className="image-slider-container">
        <Slider
          autoplay
          autoplaySpeed={2000}
          prevArrow={<PreviousBtn />}
          nextArrow={<NextBtn />}
          initialSlide={2}
          infinite
          customPaging={(i) => {
            return (
              <div>
                <img src={ImgData[i]} />
              </div>
            );
          }}
        >
          {ImgData.map((item) => (
            <div>
              <img src={item.img} style={{ width: "100%", height: "40vh",objectFit:"cover"}} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default HeroSlider;
