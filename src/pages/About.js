import React from "react";
import Img from "../images/about-cart.png";
import { ContactForm } from "../components/ContactForm";
import "../index.css"

export const About = () => {
  return (
    <div
      className="col-11 my-4 mb-5 mx-auto d-flex flex-column justify-content-center"
    >
      {/* Title */}
      <h2 className="fw-bold text-center mb-0 mb-md-5 mt-2 mt-md-4">About Us</h2>

      {/* First row */}
      <div className="row mb-md-4">
        {/* Page Image */}
        <div className="col-12 col-md-6 my-3 my-md-0 mx-auto" >
          <img src={Img} className="img-fluid" alt="Mini shopping cart with makeup products inside" style={{ width: "35rem" }} />
        </div>

        {/* Placeholder text */}
        <div className="col-12 col-md-6 mt-2 mt-md-0">
          <h3 className="fw-bold mb-3">Mission and Vision</h3>
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </h4>
          <h4>
            Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </h4>
        </div>
      </div>

      {/* Second row */}
      <div className="row mt-4 mt-md-5">
        {/* Map Section */}
        <div className="col-12 col-md-6 my-3 my-md-0 mx-auto">
          <h3 className="text-center fw-bold mb-3">Map Location</h3>
          <div className="special-container my-3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224445.18403822664!2d-81.62976936900245!3d28.480871689370737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e77edfac4210bd%3A0x1adc62268ae9b19!2sUniversal%20Orlando%20Resort!5e0!3m2!1sen!2sus!4v1663511991916!5m2!1sen!2sus"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              className="responsive-item"
            />
          </div>
        </div>

        {/* Contact form */}
        <div className="col-12 col-md-6 mt-2 mt-md-0 mx-auto">
          <h3 className="text-center fw-bold mb-3">Contact Us</h3>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};
