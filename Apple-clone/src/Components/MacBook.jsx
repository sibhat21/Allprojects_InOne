import React from "react";
import mac_laptop from "../Resource/images/home/mac-laptop.jpg";
function MacBook() {
  return (
    <section className="mack-pro-section fluid text-center pt-5">
      <div className="model pt-5">16-inch model</div>
      <h2 className="title-wrapper">MacBook Pro</h2>
      <div className="discription-wrapper">The best for the brightest.</div>
      <div className="link-wrapper">
        <a href="##"> Learn more</a>
        <a href="##">Buy</a>
      </div>
      <div className="mac-pro-img">
        <img src={mac_laptop} alt="" />
      </div>
    </section>
  );
}

export default MacBook;
