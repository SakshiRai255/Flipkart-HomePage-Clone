import Grocery from "../assets/grocery.png";
import Mobiles from "../assets/mobiles.png";
import Fashion from "../assets/fashion.png";
import Electronics from "../assets/electronics.png";
import Home from "../assets/home.jpg";
import Appliances from "../assets/appliance.png";
import Travel from "../assets/travel.png";
import Offers from "../assets/offers.png";
import Toys from "../assets/toys.png";
import Wheelers from "../assets/wheelers.png";
import { FiChevronDown } from "react-icons/fi";

export const menuItemData = [
  {
    image: Grocery,
    name: "Grocery",
  },
  {
    image: Mobiles,
    name: "Mobiles",
    downIcon:<FiChevronDown/>,
  },
  {
    image: Fashion,
    name: "Fashion",
    downIcon:<FiChevronDown/>,
  },
  {
    image: Electronics,
    name: "Electronics",
    downIcon:<FiChevronDown/>,
  },
  {
    image: Home,
    name: "Home",
  },
  {
    image: Appliances,
    name: "Appliances",
  },
  {
    image: Travel,
    name: "Travel",
  },
  {
    image: Offers,
    name: "Top Offers",
  },
  {
    image: Toys,
    name: "Beauty,Toys & More",
    downIcon:<FiChevronDown/>,
  },
  {
    image: Wheelers,
    name: "Two Wheelers",
    downIcon:<FiChevronDown/>,
  },
];
