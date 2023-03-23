import React from "react";
import { productData } from "../../Data/PraductData";
import bestofElect from "../../assets/bestofelec.jpg";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import "./Product.css";

function Product() {
  return (
    <div className="Product">
       <span className="P-right-arrow"><FaChevronLeft/></span>
       <span className="p-right-arrow"><FaChevronRight/></span>
      <div className="product-leftSide">
        <div>
          <span>Best of Electronics</span>
        </div>
        <div>
          <button className="viewAll-btn">VIEW ALL</button>
        </div>
        <div>
          <img src={bestofElect} alt="bestofElect" className="leftSideImg" />
        </div>
      </div>
      {productData.map((product) => (
        <div className="product-container">
          <a href="#">
            <div>
              <img
                src={product.productImg}
                alt="productImg"
                className="product-img"
              />
            </div>
            <div>
              <span className="product-name">{product.productName}</span>
            </div>
            <div>
              <span className="product-price">{product.productPrice}</span>
            </div>
            <div>
              <span className="product-decrp">{product.productDecrp}</span>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}

export default Product;
