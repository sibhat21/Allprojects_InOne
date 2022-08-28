const functions = require("firebase-functions");

const express = require("express");
const app = express();
const core = require("cors");
const stripe = require("stripe")(
  "sk_test_51LaVVwG7JCOYZYuo1qB1EdO5q0TCVAzTXFPqJ57JgUegqhN7hYs4z2gNVS9Dddh1j7gpdYyH6htVi3N3MI72c7rY00zIxLHJi6"
);
app.use(express.json());
app.use(core({ origin: true }));

app.get("/", (req, res) => {
  res.status(200).send("Hello ");
});
app.get("/evangadi", (req, res) => {
  res.status(200).send("Hello  Evangadi");
});
app.post("/payment/create", async (req, res) => {
  const total = req.query.total;

  console.log("Payment request recived  from this ", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);
