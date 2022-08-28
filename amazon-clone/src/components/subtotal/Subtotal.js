import React, { useState } from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStatevalue } from "../stateProvider/StateProvider";
import { useNavigate } from "react-router-dom";

const Subtotal = () => {
  const navigate = useNavigate();
  const [{ basket }, dispatch] = useStatevalue();
  const [reminder, setReminder] = useState(false);
  const giftHandler = (e) => {
    setReminder(e.currentTarget.checked);
  };
  const getBasketTotal = (basket) => {
    let total = basket.reduce((acc, curr) => curr.price + acc, 0);
    if (reminder) {
      total = total - total * 0.1;
    }
    return total;
  };
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <div>
            <p>
              Subtotal ({basket.length} items):<strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input
                className="checkbox"
                type="checkbox"
                onChange={giftHandler}
              />
              This order contains a gift
            </small>
          </div>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={(e) => navigate("/payment")}>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
