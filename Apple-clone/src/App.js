import "./App.css";

import Main from "./Components/Main";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MacBook from "./Components/MacBook";
import Iphone from "./Components/Iphone";
import Iphone11 from "./Components/Iphone11";
import WatchCard from "./Components/WatchCard";
import Header from "./Components/Header";
import Footer from "./Components/Footer.jsx";
import AirPad from "./Components/AirPad";
import TvPad from "./Components/TvIpad";
import Four04 from "./Components/Four04";
import ProductPage from "./Components/ProductPage";
function App() {
  return (
    <Router>
      <div className="App">
        {/* <Main /> */}
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/mac" element={<MacBook />} />
          <Route path="/iphone" element={<Iphone />} />
          <Route path="/music" element={<Iphone11 />} />
          <Route path="/watch" element={<WatchCard />} />
          <Route path="/ipad" element={<AirPad />} />
          <Route path="/tv" element={<TvPad />} />
          <Route path="products" element={<ProductPage />} />
          <Route path="*" element={<Four04 />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
