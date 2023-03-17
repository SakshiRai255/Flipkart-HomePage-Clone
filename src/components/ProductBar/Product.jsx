import React from "react";
import { productData } from "../../Data/PraductData";
import "./Product.css";

function Product() {
  return (
    <div className="Product">
      <div className="product-leftSide">
          <h2>Top Offers</h2>
          <button>VIEW ALL</button>
          <img src="" alt="" />
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
