import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const [items, setItem] = useState([]);
  const { productID } = useParams();
  console.log(productID);

  useEffect(() => {
    fetch("http://localhost:2024/iphones")
      .then((res) => res.json())
      .then((data) => {
        let productList = data.products;
        console.log(productList);
        let singleproduct = productList.filter(
          (x) => x.product_url === productID
        );
        setItem(productList);
      })
      .catch((err) => console.log("unable to connect the data", err));
  }, []);
  console.log(items);
  return (
    <div>
      <section className="page-wrapper mt-5">
        <div className="container container-wrapper">
          <h1>Products page</h1>
          {items?.map((product, index) => {
            let id = product.roduct_id;
            let img = product.product_img;
            let title = product.produtc_name;
            let brif = product.product_brief_description;
            let startPrice = product.starting_price;
            let priceRange = product.price_range;
            let priceId = product.price_id;
            let productlink = product.product_link;
            let detalis = product.roduct_description;
            // let productUrl = product.product_url;

            let productDiv = (
              <div key={index} className="row">
                <div className="row justify-content-center text-center">
                  <div className="col-12 mt-5 pt-5">
                    <div className="title-wrapper font-w-bold"> {title}</div>
                    <div className="brife-des"> {brif}</div>
                  </div>
                </div>
                <div className="row justify-content-center text-center product-holder h-100 m-5">
                  <div className={`col-sm-12 col-md-6 my-auto`}>
                    <div className="starting-price">{`Starting at ${startPrice}`}</div>
                    <div className="monthly-price">{priceRange}</div>
                    <div className="product-brif">{detalis}</div>
                  </div>
                  <div className={`col-sm-12 col-md-6`}>
                    <div className="product-image">
                      <img src={img} allt="product" />
                    </div>
                  </div>
                </div>
              </div>
            );
            return productDiv;
          })}
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
