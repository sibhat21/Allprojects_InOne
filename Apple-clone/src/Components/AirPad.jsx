import React from "react";
import apple_tv from "../Resource/images/icons/apple-tv-logo.png";
import servant_logo from "../Resource/images/icons/servant-logo.png";
import banker from "../Resource/images/home/banker.png";

function AirPad() {
  return (
    <section className="fluid text-center tvAirPod-section">
      <div className="row">
        <div className="col-md-6 mr-1 tv-wrapper">
          <div className="tv-image  pt-4">
            <img src={apple_tv} alt="" />
          </div>
          <div className="d-md-none tv-servant-wrapper">
            <img src={servant_logo} alt="" />
          </div>
          <div className="banker-wrapper d-md-block">
            <img src={banker} alt="" />
          </div>

          <div className="link-trailer">watch the trailer</div>
        </div>
        <div className="col ml-1 airPods-right-wrapper">
          <h2 className="title-wrapper tv-image pt-4">AirPods Pro</h2>
          <div className="description-wraper">
            magic like you've newer heard
          </div>
          <div className="link-wrapper">
            <a href="#"> Learn more</a>
            <a href="#"> Buy</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AirPad;
