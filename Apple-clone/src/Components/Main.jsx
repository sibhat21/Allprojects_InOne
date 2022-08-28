import React from "react";

import Header from "./Header";
import MackBook from "./MacBook";
import Iphone from "./Iphone";
import Iphone11 from "./Iphone11";
import AirPad from "./AirPad";
import TvIpad from "./TvIpad";
import AppleVideos from "./AppleVideos";
import Footer from "./Footer";
import WatchCard from "./WatchCard";

function Main() {
  return (
    <React.Fragment>
      <Header />
      <MackBook />
      <Iphone />
      <Iphone11 />
      <WatchCard />
      <AirPad />
      <TvIpad />
      <AppleVideos />
      <Footer />
    </React.Fragment>
  );
}

export default Main;
