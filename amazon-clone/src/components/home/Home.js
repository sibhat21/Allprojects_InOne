import React from "react";
import Product from "../product/Product";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home_row">
          <Product
            id="123456"
            title="The Learn Sratup:How Constant Innovatoion Creates Radition"
            price={11.96}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Product
            id="123456"
            title="The Learn Sratup:How Constant Innovatoion Creates Radition"
            price={298.79}
            rating={5}
            image="https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress"
          />
          <Product
            id="123456"
            title="
Synthphonics SE8 Hybrid Active Noise Cancelling Headphones, Wireless Over-Ear Bluetooth Headphones with Hi-Fi Stereo Sound, Comfortable Protein Earpads, 30H"
            price={35.79}
            rating={5}
            image="https://m.media-amazon.com/images/I/712ogfMZuDL._AC_SL1500_.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="123456"
            title="Samsung Electronics Galaxy S22 Ultra Smartphone, Factory Unlocked Android Cell Phone, 1TB, 8K Camera & Video, Brightest Display, S Pen, Long Battery Life,"
            price={349.38}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
          <Product
            id="123456"
            title="APWONE 2000gram Electric Grain Mills Grinder Powder LCD Digital Stainless Steel Ultra Grinder Machine for Kitchen Herb Spice Pepper Coffee Corn"
            price={68.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
            alt=""
          />
          <Product
            id="123456"
            title="Apple Watch SE [GPS + Cellular 44mm] Smart Watch w/ Space Grey Aluminium Case with Midnight Sport Band. Fitness & Activity Tracker, Heart Rate Monitor"
            price={63.48}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            alt=""
          />
        </div>
        <div className="home_row">
          <Product
            id="123456"
            title="The Learn Sratup:How Constant Innovatoion Creates Radition"
            price={52.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
          <Product
            id="123456"
            title="SAMSUNG Galaxy Z Fold 4 Cell Phone, Factory Unlocked Android Smartphone, 256GB, Flex Mode, Hands Free Video, Multi Window View, Foldable Display, S Pen Compatible, US Version, Phantom Black"
            price={152.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71Zzyu-Ol4L._AC_SL1500_.jpg"
          />
          <Product
            id="123456"
            title="Laptop Backpack 15.6 Inch, Business Slim Durable Laptops Travel Backpacks"
            price={23.49}
            rating={5}
            image="https://m.media-amazon.com/images/I/717Rp03xdmL._AC_SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

//https://m.media-amazon.com/images/I/71Zzyu-Ol4L._AC_SL1500_.jpg
{
  /* <img id="detailImg" src="https://m.media-amazon.com/images/I/712ogfMZuDL._AC_SL1500_.jpg" style="position: absolute; left: -624.978px; top: -1125.97px;"></img> */
}

//<img id="detailImg" src="https://m.media-amazon.com/images/I/717Rp03xdmL._AC_SL1500_.jpg" style="position: absolute; left: 0px; top: -48.3187px;">
