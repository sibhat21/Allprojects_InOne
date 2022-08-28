import React from "react";
import ipad_logo from "../Resource/images/icons/new-ipad-logo.png";

function TvIpad() {
  return (
    <section className="fluid text-center mackbook-ipad-section my-2 mt-5">
      <div className="row">
        <div className="col-md-6 mr-1 mackBook-leftSide">
          <div className=" model pt-4">16-inch model</div>
          <h2 className="title-wrapper">MackBook Pro</h2>

          <div className="description-wraper">The best for the brightest.</div>
          <div className="link-wrapper">
            <a href="#"> Learn more</a>
            <a href="#"> Buy</a>
          </div>
        </div>

        <div className="col iPad-right-wrapper  ml-1">
          <div className="ipad-wrapper pt-4">
            <img src={ipad_logo} alt="" />
          </div>
          <div className="description-wraper">
            Like a computer. Unlike any computer.
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

export default TvIpad;
