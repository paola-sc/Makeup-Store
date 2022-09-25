/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Link } from "react-router-dom";
import Lipstick from "../images/lipstick.png"
import Eyeshadow from "../images/eyeshadow.png"
import Bronzer from "../images/bronzer.png"
import "../index.css";

export const Home = () => {

  return (
    <>
      {/* Hero section */}
      <div className="heroBg">
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="text-white text-center heroTextBg p-3">
            <h1 className="mb-3">Welcome to The Beauty Store</h1>
            <h3>Find comestics from amazing brands</h3>
          </div>
        </div>
      </div>

      {/* Promo and Navigation*/}
      <div className="col-11 black text-center mx-auto my-4">

        <h3 className="fw-bold mt-5 mb-2 mb-md-3">Thank you for visiting our store</h3>

        <div className="row d-flex justify-content-around d-inline-flex flex-wrap mt-3 mb-1">
          {/* Lipsticks */}
          <div className="col-12 col-md-4">
            <div className="promoContainer d-flex align-items-center justify-content-center h-100 w-100">
              <Link to="/products/lipstick" className="black text-decoration-none">
                <img src={Lipstick} alt="Woman applying lipstick in front of mirror" className="promoImage" />
                <div className="promoOverlay" />
                <div className="promoText">
                  <div className='py-2 px-3 black fs-5 fw-bold'>
                    Lipsticks
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Eyeshadows */}
          <div className="col-12 col-md-4 my-3 my-md-0">
            <div className="promoContainer d-flex align-items-center justify-content-center h-100 w-100">
              <Link to="/products/eyeshadow" className="black text-decoration-none">
                <img src={Eyeshadow} alt="Woman applying lipstick in front of mirror" className="promoImage" />
                <div className="promoOverlay" />
                <div className="promoText">
                  <div className='py-2 px-3 black fs-5 fw-bold'>
                    Eyeshadows
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Bronzers */}
          <div className="col-12 col-md-4">
            <div className="promoContainer d-flex align-items-center justify-content-center h-100 w-100">
              <Link to="/products/bronzer" className="black text-decoration-none">
                <img src={Bronzer} alt="Woman applying lipstick in front of mirror" className="promoImage" />
                <div className="promoOverlay" />
                <div className="promoText">
                  <div className='py-2 px-3 black fs-5 fw-bold'>
                    Bronzers
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="row my-3">
          {/* Navigator of product categories */}
          <div className="col-12 col-md-6 mt-2 mt-md-0">
            <div className="d-flex flex-column justify-content mb-3 lightPink rounded">
              {/* Title */}
              <h4 className="pt-3 m-0">Product Categories</h4>

              <div className="p-3 px-sm-5">
                <h5 className="m-0">
                  {"Find products based on their category. Then click any sub-category."}
                </h5>
              </div>

              <div className="d-flex d-inline-flex justify-content-around p-3 px-sm-5 fs-5">
                {/* Category controllers */}
                <div
                  className="nav flex-column nav-pills"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  {/* Lips */}
                  <button
                    className="nav-link active"
                    id="v-pills-lips-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-lips"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-lips"
                    aria-selected="true"
                  >
                    Lips
                  </button>

                  {/* Eyes */}
                  <button
                    className="nav-link"
                    id="v-pills-eyes-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-eyes"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-eyes"
                    aria-selected="false"
                  >
                    Eyes
                  </button>

                  {/* Others */}
                  <button
                    className="nav-link"
                    id="v-pills-others-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-others"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-others"
                    aria-selected="false"
                  >
                    Others
                  </button>
                </div>

                {/* Category contents */}
                <div className="tab-content p-3" id="v-pills-tabContent">
                  {/* Lips */}
                  <div
                    className="tab-pane fade show active"
                    id="v-pills-lips"
                    role="tabpanel"
                    aria-labelledby="v-pills-lips-tab"
                    tabIndex="0"
                  >
                    <ul
                      style={{ listStyleType: "none" }}
                      className="text-start m-0 p-0"
                    >
                      <li>
                        <Link
                          to="/products/lip_liner"
                          className="black text-decoration-none"
                        >
                          Lip liner
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/products/lipstick"
                          className="black text-decoration-none"
                        >
                          Lipstick
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Eyes */}
                  <div
                    className="tab-pane fade"
                    id="v-pills-eyes"
                    role="tabpanel"
                    aria-labelledby="v-pills-eyes-tab"
                    tabIndex="0"
                  >
                    <ul
                      style={{ listStyleType: "none" }}
                      className="text-start m-0 p-0"
                    >
                      <li>
                        <Link
                          to="/products/eyeshadow"
                          className="black text-decoration-none"
                        >
                          Eyeshadow
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/products/eyeliner"
                          className="black text-decoration-none"
                        >
                          Eyeliner
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/products/eyebrow"
                          className="black text-decoration-none"
                        >
                          Eyebrow
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/products/mascara"
                          className="black text-decoration-none"
                        >
                          Mascara
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Others */}
                  <div
                    className="tab-pane fade"
                    id="v-pills-others"
                    role="tabpanel"
                    aria-labelledby="v-pills-others-tab"
                    tabIndex="0"
                  >
                    <ul
                      style={{ listStyleType: "none" }}
                      className="text-start m-0 p-0"
                    >
                      <li>
                        <Link
                          to="/products/blush"
                          className="black text-decoration-none"
                        >
                          Blush
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/products/bronzer"
                          className="black text-decoration-none"
                        >
                          Bronzer
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/products/foundation"
                          className="black text-decoration-none"
                        >
                          Foundation
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/products/nail_polish"
                          className="black text-decoration-none"
                        >
                          Nail Polish
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Media Credits */}
          <div className="col-12 col-md-6 mt-2 mt-md-0">
            <div className="d-flex flex-column justify-content lightPink rounded pb-4">
              <div className="p-3">
                {/* Title */}
                <h4>Media Credits</h4>

                {/* Credits */}
                <div className="row d-flex d-inline-flex text-start m-3">

                  <div className="col-12">
                    {/* Hero photo */}
                    <div>
                      <a
                        href="https://www.pexels.com/photo/overhead-shot-of-cosmetic-products-4938511/"
                        title="Makeup products spread over table"
                        className="text-decoration-none salmon"
                      >
                        Hero Photo by Karolina Grabowska - Pexels
                      </a>
                    </div>

                    {/* About photo */}
                    <div>
                      <a
                        href="https://www.pexels.com/photo/three-women-looking-the-makeup-10609758/"
                        title="Three women looking at an eyeshadow palette"
                        className="text-decoration-none salmon"
                      >
                        About Photo by cottonbro - Pexels
                      </a>
                    </div>

                    {/* Logo credits */}
                    <div>
                      <a
                        href="https://www.flaticon.com/free-icons/lotus"
                        title="lotus icons"
                        className="text-decoration-none salmon"
                      >
                        Lotus icon by Freepik - Flaticon
                      </a>
                    </div>

                    {/* Promo Lipstick photo */}
                    <div>
                      <a
                        href="https://www.pexels.com/photo/woman-applying-lipstick-7383123/"
                        title="Woman applying lipstick"
                        className="text-decoration-none salmon"
                      >
                        Promo Lipstick Photo by Polina Tankilevitch - Pexels
                      </a>
                    </div>

                    {/* Promo Eyeshadow photo */}
                    <div>
                      <a
                        href="https://www.pexels.com/photo/person-applying-eye-shadow-7290740/"
                        title="Close up to woman's eyes while applying eyeshadow"
                        className="text-decoration-none salmon"
                      >
                        Promo Eyeshadow Photo by MART PRODUCTION - Pexels
                      </a>
                    </div>

                    {/* Promo Bronzer photo */}
                    <div>
                      <a
                        href="https://www.pexels.com/photo/woman-in-gray-long-sleeve-shirt-holding-black-smartphone-4620820/"
                        title="Woman applying bronzer"
                        className="text-decoration-none salmon"
                      >
                        Promo Bronzer Photo by cottonbro - Pexels
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  );
};