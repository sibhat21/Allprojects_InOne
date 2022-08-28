import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useStatevalue } from "../stateProvider/StateProvider";
import CheckOutProducts from "../checkoutPoduct/CheckOutProducts";
import "./payment.css";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import axios from "../axios";
import { db } from "../firebase";

const Payment = () => {
  const stripe = useStripe();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [reminder, setReminder] = useState(false);
  const element = useElements();
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [clientSecret, setClientSecret] = useState(true);
  const [{ basket, user }, dispatch] = useStatevalue();

  useEffect(() => {
    const getClientSecret = async () => {
      const respose = await axios({
        method: "post",
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(respose.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: element.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        db.collection("users")
          .doc(user.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceeded(true);
        setProcessing(false);
        setError(null);
        dispatch({
          type: "EMPTY_BASKET",
        });
        navigate("/orders");
      });
  };
  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };
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
  console.log("The Client secret is>>>>> ", clientSecret);
  return (
    <div className="payment">
      <div className="payment_container">
        <h1>checkout {<Link to="/checkout">({basket.length} items) </Link>}</h1>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment_address">
            <h5>{user}</h5>
            <h5>123 React Lane</h5>
            <h5>Chicago, IL</h5>
          </div>
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Review itmes and delivery</h3>
          </div>
          <div className="payment_items">
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
        </div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment Method</h3>
            <div className="ckeckbox_container">
              <input
                className="chackbox"
                type="checkbox"
                onChange={giftHandler}
              />
              <h5 className="h5"> This order contains a gift</h5>
            </div>
          </div>
          <div className="payment_details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div calssName="payment_priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total:{value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div className="error">{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
