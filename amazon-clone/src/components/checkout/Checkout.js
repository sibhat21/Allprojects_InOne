import React from "react";
import CheckOutProducts from "../checkoutPoduct/CheckOutProducts";
import { useStatevalue } from "../stateProvider/StateProvider";
import Subtotal from "../subtotal/Subtotal";
import "./Checkout.css";

const Checkout = () => {
  const [{ basket }, dispatch] = useStatevalue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="🍳"
        />
        <h3>Hello</h3>
        <h2 className="checkout_title">Your shoping Basket</h2>
        {basket.map((item) => (
          <CheckOutProducts
            id={item.id}
            titile={item.titile}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
