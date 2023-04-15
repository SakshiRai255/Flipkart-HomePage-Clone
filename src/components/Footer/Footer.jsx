import React from "react";
import "./Footer.css";
import PaymentMethod from "../../assets/payment-method.svg";
import giftCards from "../../assets/giftCards.svg";
import advertise from "../../assets/advertise.svg";
import helpCenter from "../../assets/helpCenter.svg"
import seller from "../../assets/seller.svg"

function Footer() {
  return (
    <div className="Footer">
      <div className="container">
        <div className="wrapper">
          <div className="lists">
            <ul className="list-items">
              <p>ABOUT</p>
              <a href="#">Contact Us</a>
              <a href="#">About Us</a>
              <a href="#">Careers</a>
              <a href="#">Flipkart Stories</a>
              <a href="#">Press</a>
              <a href="#">Flipkart Wholesale</a>
              <a href="#">Corporate Information</a>
            </ul>
            <ul className="list-items">
              <p>HELP</p>
              <a href="#">Payments</a>
              <a href="#">Shiping</a>
              <a href="#">Cancelation & Returns</a>
              <a href="#">Flipkart Stories</a>
              <a href="#">FAQ</a>
              <a href="#">Report Infringement</a>
            </ul>
            <ul className="list-items">
              <p>CONSUMER POLICY</p>
              <a href="#">Return Policy</a>
              <a href="#">Term of Use</a>
              <a href="#">Security</a>
              <a href="#">Privacy</a>
              <a href="#">Sitemap</a>
              <a href="#">Grievance Redressal</a>
              <a href="#">EPR Compliance</a>
            </ul>
            <ul className="list-items">
              <p>SOCIAL</p>
              <a href="#">Facebook</a>
              <a href="#">Twitter</a>
              <a href="#">YouTube</a>
            </ul>
          </div>
          <div className="flipkart-address">
            <ul className="address-container">
              <p>Mail Us :</p>
              <span>
                Flipkart Internet Private Limited, Buildings Alyssa, Begonia &
                Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli
                Village, Bengaluru, 560103, Karnataka, India
              </span>
            </ul>
            <ul className="address-container">
              <p>Registered Office Address :</p>
              <span>
                Flipkart Internet Private Limited, Buildings Alyssa, Begonia &
                Clove Embassy Tech Village,Outer Ring Road, Devarabeesanahalli
                Village, Bengaluru, 560103, Karnataka, India CIN :
                U51109KA2012PTC066107 <br /> 
                Telephone :<a href="044-45614700"> 044-45614700</a> 
              </span>
            </ul>
          </div>
        </div>
      </div>
      <div className="addvertise-section">
        <div className="f-icons">
          <img src={seller}/>
          <p>Become a seller</p>
        </div>
        <div className="f-icons">
          <img src={advertise}/>
          <p>Advertise</p>
        </div>
        <div className="f-icons">
          <img src={giftCards}/>
          <p>Gift Cards</p>
        </div>
        <div className="f-icons">
          <img src={helpCenter}/>
          <p>Help Center</p>
        </div>
        <div className="f-icons">
          <p>© 2007-2023 Flipkart.com</p>
        </div>
        <div className="f-icons">
          <img src={PaymentMethod}/>
        </div>
      </div>
    </div>
  );
}

export default Footer;
