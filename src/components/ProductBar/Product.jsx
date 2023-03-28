import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { productData } from "../../Data/PraductData";
import bestofElect from "../../assets/bestofelec.jpg";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import "./Product.css";

function Product() {
  const PreviousBtn = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <FaChevronLeft style={{ color: "#000", fontSize: "30px" }} />
      </div>
    );
  };
  const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <FaChevronRight style={{ color: "#000", fontSize: "30px" }} />
      </div>
    );
  };

  return (
    <div>
      <div style={{ margin: "20px" }}>
        <div className="Product">
          {/* <div className="product-leftSide">
            <div>
              <img src={bestofElect} alt="bestOfElectronics" />
            </div>
          </div> */}
          <div>
            <Slider
              slidesToShow={5}
              slidesToScroll={3}
              infinite={false}
              prevArrow={<PreviousBtn />}
              nextArrow={<NextBtn />}
            >
              {productData.map((product) => (
                <Card product={product} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

const Card = ({ product }) => {
  return (
    <div className="product-container">
      <img src={product.productImg} className="product-img " />
      <p className="product-name">{product.productName}</p>
      <p className="product-price">{product.productPrice}</p>
      <p className="product-decrp">{product.productDecrp}</p>
    </div>
  );
};

export default Product;
