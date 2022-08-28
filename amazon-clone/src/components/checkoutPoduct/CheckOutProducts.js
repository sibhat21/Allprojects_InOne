import React from "react";
import { useStatevalue } from "../stateProvider/StateProvider";
import "./CheckOutproduct.css";

const CheckOutProducts = ({ id, image, title, price, rating, hideButton }) => {
  const [{ basket }, dispatch] = useStatevalue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <div className="checkoutProduct_image">
        <img className="checkoutProduct_image" src={image} />
      </div>

      <div className="checkoutProduct_info">
        <h3 className="checkoutProduct_title">{title}</h3>
        <p className="checkoutProduct_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct_rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p>⭐</p>
            ))}
        </div>
        {!hideButton && (
          <button onClick={removeFromBasket}>Romove from Basket</button>
        )}
      </div>
    </div>
  );
};

export default CheckOutProducts;
