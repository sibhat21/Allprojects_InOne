import React from "react";
import { useStatevalue } from "../stateProvider/StateProvider";
import "./Product.css";

const Product = ({ title, id, image, price, rating }) => {
  const [{ basket }, dispatch] = useStatevalue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product_info">
        <h5>{title}</h5>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((item, index) => (
              <p key={index}>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket} className="button">
        Add to Basket
      </button>
    </div>
  );
};

export default Product;
