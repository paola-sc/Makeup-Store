import React from "react";
import Img from "../images/lipsticks.png";

export const About = () => {
  return (
    <div
      className="my-4 mb-5 mx-auto d-flex flex-column justify-content-center"
      style={{ width: "85%" }}
    >
      <h2 className="fw-bold">About Us</h2>

      <div className="my-3" style={{ width: "18rem" }}>
        <img src={Img} className="img-fluid" alt="cosmetics" />
      </div>

      <div>
        <h4>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </h4>
      </div>
    </div>
  );
};
