import React from "react";
import "./Header.css";
import { IoSearchSharp } from "react-icons/io5";
import { FiChevronDown } from "react-icons/fi";
import { BsCartDashFill } from "react-icons/bs";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { IoNotifications } from "react-icons/io5";
import { BsQuestionSquareFill } from "react-icons/bs";
import { HiOutlineArrowTrendingUp } from "react-icons/hi2";
import { IoMdDownload } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { HiOutlineStar } from "react-icons/hi";
import { BsFillHeartFill } from "react-icons/bs";
import { GiWantedReward } from "react-icons/gi";
import { MdCardGiftcard } from "react-icons/md";
import { RiTerminalBoxFill } from "react-icons/ri";

import Flipkart from "../../assets/flipkart-plus.png";
import Plus from "../../assets/plus_ae.png";

function Header() {
  return (
    <div className="Header">
      <div className="header-section">
        {/*Flipkart-logo-Section */}
        <div className="logo-flipkart">
          <img src={Flipkart} alt="Flipkart" />
          <div className="logo-plus">
            <span>Explore</span>
            <span>Plus</span>
            <img src={Plus} alt="" />
          </div>
        </div>

        {/*Flipkart-Search-Section */}
        <div className="search-container">
          <div className="searchbar-section">
            <input
              type="text"
              placeholder="Search for product,brands and more"
            />
            <div>
              <IoSearchSharp className="search-logo" />
            </div>
            <div className="recent-search">
              <div className="recent-list">
                <RxCounterClockwiseClock className="clock-icon" />
                <p>Mobile</p>
              </div>
            </div>
          </div>
          <div className="login-container">
            <button className="login-btn">Login</button>
            <div className="login-menu">
              <div className="login-list">
                <div className="signup-section">
                  <span>New Customer ?</span>
                  <a href="#">
                    <span className="signup-btn">Sign Up</span>
                  </a>
                </div>
              </div>
              <div className="login-list">
                <a href="">
                  <CgProfile className="login-list-icon" />
                  <span>My Profile</span>
                </a>
              </div>
              <div className="login-list">
                <a href="">
                  <HiOutlineStar className="login-list-icon" />
                  <span>Flipkart Plus Zone</span>
                </a>
              </div>
              <div className="login-list">
                <a href="">
                  <RiTerminalBoxFill className="login-list-icon" />
                  <span>Orders</span>
                </a>
              </div>
              <div className="login-list">
                <a href="">
                  <BsFillHeartFill className="login-list-icon" />
                  <span>Wislist</span>
                </a>
              </div>
              <div className="login-list">
                <a href="">
                  <GiWantedReward className="login-list-icon" />
                  <span>Rewards</span>
                </a>
              </div>
              <div className="login-list">
                <a href="">
                  <MdCardGiftcard className="login-list-icon" />
                  <span>Gift Cards</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="nav-heading">
          <div>
            <a href="#">Become a Seller</a>
          </div>
          <div className="more-container">
            <span className="more-heading">
              More <FiChevronDown className="down-icon" />
            </span>
            <div className="more-list">
              <div className="more-list-items">
                <a href="#">
                  <IoNotifications className="more-list-icon" />
                  <span>Notification Preferences</span>
                </a>
              </div>
              <div className="more-list-items">
                <a href="#">
                  <BsQuestionSquareFill className="more-list-icon" />
                  <span>24*7 custromer Care</span>
                </a>
              </div>
              <div className="more-list-items">
                <a href="#">
                  <HiOutlineArrowTrendingUp className="more-list-icon" />
                  <span>Advertise</span>
                </a>
              </div>
              <div className="more-list-items">
                <a href="#">
                  <IoMdDownload className="more-list-icon" />
                  <span>Download App</span>
                </a>
              </div>
            </div>
          </div>
          <div>
            <a href="#">
              <BsCartDashFill className="cart-icon" /> Cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
