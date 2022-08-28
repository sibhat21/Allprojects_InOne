import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStatevalue } from "../stateProvider/StateProvider";
import { auth } from "../firebase";

const Header = () => {
  const [{ basket, user }, dispatch] = useStatevalue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <Link to={!user && "login"}>
          <div onClick={handleAuthentication} className="header_option">
            <span className="header_optionOne">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header_optionTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header_option">
            <span className="header_optionOne">Returns </span>
            <span className="header_optionTwo">& Orders </span>
          </div>{" "}
        </Link>
        <div className="header_option">
          <span className="header_optionOne">Your</span>
          <span className="header_optionTwo">& Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="header_optionTwo header_basketCount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;