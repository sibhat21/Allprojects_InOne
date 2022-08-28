import "./App.css";
import React, { useEffect } from "react";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Checkout from "./components/checkout/Checkout";
import LogInForm from "./components/logInForm/LogInForm";
import Payment from "./components/payment/Payment";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useStatevalue } from "./components/stateProvider/StateProvider";
import { auth } from "./components/firebase";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Orders from "./components/order/Orders";
const stripekey = loadStripe(
  "pk_test_51LaVVwG7JCOYZYuorg80uenOmQqZtAGwaYXnlrPdiGJR1iCbfrva6ug1FHpUEEFUsHA2MzhaZqHhab4rVR6tFyva00YRAxP4xe"
);

function App() {
  const [{}, dispatch] = useStatevalue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({ type: "SET_USER", user: authUser });
      } else {
        dispatch({ type: "SET_USER", user: null });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/login" element={<LogInForm />} />
          <Route
            path="/payment"
            element={
              <Elements stripe={stripekey}>
                <Payment />
              </Elements>
            }
          ></Route>

          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
           <Route path="/orders" element={<Orders />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
