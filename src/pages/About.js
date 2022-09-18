import React from "react";
import Img from "../images/about-cart.png";

export const About = () => {

  return (
    <div
      className="col-11 my-4 mb-5 mx-auto d-flex flex-column justify-content-center"
    >
      {/* Title */}
      <h2 className="fw-bold text-center mb-0 mb-md-5">About Us</h2>

      <div className="row">
        {/* Page Image */}
        <div className="col-12 col-md-6 my-3 my-md-0 mx-auto" >
          <img src={Img} className="img-fluid" alt="Mini shopping cart with makeup products inside" />
        </div>

        {/* Placeholder text */}
        <div className="col-12 col-md-6 mt-2 mt-md-0">
          <h3 className="fw-bold mb-3">Mission and Vision</h3>
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </h4>
          <h4>
            Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.E xcepteur sint occaecat cupidatat non proident.
          </h4>
        </div>
      </div>
    </div>
  );
};
