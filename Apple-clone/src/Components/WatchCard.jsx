import React from "react";

import watch_series5 from "../Resource/images/icons/watch-series5-logo.png";
import apple_card from "../Resource/images/icons/apple-card-logo.png";
import { Link } from "react-router-dom";

function WatchCard() {
  return (
    <section className="fluid text-center my-2 mt-5">
      <div className="row">
        <div className="col-md-6 watch-wrapper mr-1">
          <div className="col watch-serious pt-4">
            <img src={watch_series5} alt="" />
          </div>

          <div className="discription-wrapper">
            with the new Always-on retina display.
            <br />
            You've never seen a watch like this.
          </div>
          <div className="link-wrapper col text-center">
            <a href="##"> Learn more</a>
            <a href="##">Buy</a>
          </div>
        </div>
        <div className="col card-wrapper ml-1">
          <div className=" col pt-4 logo-wrapper">
            <img src={apple_card} alt="xx" />
          </div>
          <div className="description-wrapper mt-2">
            Get 3% Daily Cash on purchases from <br />
            Apple using Apple Card.
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

export default WatchCard;
