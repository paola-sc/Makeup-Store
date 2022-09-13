/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Product } from "../components/Product";
import { Link } from "react-router-dom";
import axios from "axios";
import "../index.css";

export const Home = () => {
  let [product, setProduct] = useState([]);

  async function fetchProduct() {
    let response = await axios(
      "https://makeup-api.herokuapp.com/api/v1/products/1046.json"
    );
    let results = await response.data;
    setProduct(results);
  }

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      <div className="heroBg">
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="text-white text-center heroTextBg p-3">
            <h1 className="mb-3">Welcome to The Beauty Store</h1>
            <h3>Find comestics from amazing brands</h3>
          </div>
        </div>
      </div>
      <div className="black text-center my-4">
        <div
          className="row d-flex d-inline-flex justify-content-center"
          style={{ width: "90%" }}
        >
          <div className="col mb-2" style={{ maxWidth: "30rem" }}>
            <div className="flex flex-column justify-content-center m-3">
              <h3>Check out our new lipstick!</h3>
              <div className="d-flex justify-content-center">
                <Product
                  image={product.api_featured_image}
                  name={product.name}
                  id={product.id}
                />
              </div>
            </div>
          </div>
          <div className="col mb-3" style={{ maxWidth: "30rem" }}>
            <div className="d-flex flex-column justify-content m-3 whitePink rounded">
              <h4 className="pt-3 m-0">Product Categories</h4>
              <div className="d-flex d-inline-flex justify-content-around p-3 px-sm-5">
                <div
                  className="nav flex-column nav-pills"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
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
                <div className="tab-content p-3" id="v-pills-tabContent">
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
                          to="/products/category/lip_liner"
                          className="black text-decoration-none"
                        >
                          Lip liner
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/products/category/lipstick"
                          className="black text-decoration-none"
                        >
                          Lipstick
                        </Link>
                      </li>
                    </ul>
                  </div>
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
                          to="/products/category/eyeshadow"
                          className="black text-decoration-none"
                        >
                          Eyeshadow
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/products/category/eyeliner"
                          className="black text-decoration-none"
                        >
                          Eyeliner
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/products/category/eyebrow"
                          className="black text-decoration-none"
                        >
                          Eyebrow
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/products/category/mascara"
                          className="black text-decoration-none"
                        >
                          Mascara
                        </Link>
                      </li>
                    </ul>
                  </div>
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
                          to="/products/category/blush"
                          className="black text-decoration-none"
                        >
                          Blush
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/products/category/bronzer"
                          className="black text-decoration-none"
                        >
                          Bronzer
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/products/category/foundation"
                          className="black text-decoration-none"
                        >
                          Foundation
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/products/category/nail_polish"
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
            <div className="d-flex flex-column justify-content m-3 whitePink rounded">
              <div className="p-3">
                <h5>Media Credits</h5>
                <div>
                  <a
                    href="https://www.pexels.com/photo/pink-and-red-lipsticks-3373746/"
                    title="Pink and red lipsticks"
                    className="text-decoration-none salmon"
                  >
                    Hero Section Photo by Shiny Diamond - Pexels
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.flaticon.com/free-icons/lotus"
                    title="lotus icons"
                    className="text-decoration-none salmon"
                  >
                    Lotus logo icon created by Freepik - Flaticon
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
