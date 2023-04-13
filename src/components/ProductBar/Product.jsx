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
    console.log(props);
    const { className, onClick,currentSlide } = props;
    return (
      <>{
        currentSlide !== 0 && (
      <div className={className} onClick={onClick}>
        <FaChevronLeft style={{ color: "#000", fontSize: "30px" }} />
      </div>
       )}
      </>
    );
  };
  const NextBtn = (props) => {
    const { className, onClick,currentSlide } = props;
    return (
      <>
      {currentSlide == 0 &&(
      <div className={className} onClick={onClick}>
        <FaChevronRight style={{ color: "#000", fontSize: "30px" }} />
      </div>
      )}
      </>
    );
  };

  return (
    <div className="Product">
      <div
        className="product-section"
        style={{ flexGrow: "1", overflow: "auto", padding: "0px 0px 10px" }}
      >
        <div className="product-container">
          <div className="product-leftSide">
            <div className="product-leftside-container">
              <h2>Best of Electronics</h2>
              <div>
                <button className="viewAll-btn">View All</button>
              </div>
            </div>
          </div>
          <div className="product-slider">
            <div style={{ width: "1250px" }}>
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
    </div>
  );
}

const Card = ({ product }) => {
  return (
    <div className="product-items-section">
      <div
        className="product-items"
        style={{ width: "252px;", padding: "10px 5px" }}
      >
        <div style={{ height: "220px", width: "252px" }}>
          <img src={product.productImg} className="product-img " />
        </div>
        <div className="product-name">{product.productName}</div>
        <div className="product-price">{product.productPrice}</div>
        <div className="product-decrp">{product.productDecrp}</div>
        <div></div>
      </div>
    </div>
  );
};

export default Product;
