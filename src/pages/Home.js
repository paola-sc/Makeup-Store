/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Link } from "react-router-dom";
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
        <div className="row mb-3">
          {/* Navigator of product categories */}
          <div className="col-12 col-md-6 mt-2 mt-md-0">
            <div className="d-flex flex-column justify-content mb-3 whitePink rounded">
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
            <div className="d-flex flex-column justify-content whitePink rounded">
              <div className="p-3">
                {/* Title */}
                <h4>Media Credits</h4>

                {/* Credits */}
                <div className="row d-flex d-inline-flex text-start m-3">

                  {/* First Column */}
                  <div className="col-12 col-md-6">
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
                        href="https://www.pexels.com/photo/assorted-cosmetic-lot-2536965/"
                        title="Mini shopping cart with makeup products inside"
                        className="text-decoration-none salmon"
                      >
                        About Photo by Suzy Hazelwood - Pexels
                      </a>
                    </div>

                    {/* Promo photo */}
                    <div>
                      <a
                        href="https://www.pexels.com/photo/crop-beautiful-woman-rouging-lips-6001502/"
                        title="Woman applying lipstick"
                        className="text-decoration-none salmon"
                      >
                        Promo Photo by Sam Lion - Pexels
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

                  </div>


                  {/* Cart photo 1 */}
                  <div>
                    <a
                      href="https://www.pexels.com/photo/eyeshadow-pallete-makeup-brush-and-lipstick-3286389/"
                      title="Close up of eyeshadow pallette over a dresser"
                      className="text-decoration-none salmon"
                    >
                      Cart Photo #1 by Klaudia Ekert - Pexels
                    </a>
                  </div>

                  {/* Cart photo 2 */}
                  <div>
                    <a
                      href="https://www.pexels.com/photo/woman-applying-lipstick-7383123/"
                      title="Woman applying lipstick"
                      className="text-decoration-none salmon"
                    >
                      Cart Photo #2 by Polina Tankilevitch - Pexels
                    </a>
                  </div>

                  {/* Cart photo 3 */}
                  <div>
                    <a
                      href="https://www.pexels.com/photo/pulverized-powders-and-assorted-colored-lispticks-1377034/"
                      title="Lipsticks spread over table"
                      className="text-decoration-none salmon"
                    >
                      Cart Photo #3 by Cristian Pădureț - Pexels
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
