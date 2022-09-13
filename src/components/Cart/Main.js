import React from "react";
import "../../index";
import { Item } from "./Item";

export const Main = (props) => {
  const { products, onAdd } = props;

  return (
    <>
      {products ? (
        <div className="p-4 pb-md-5 black col-11 d-flex flex-column justify-content-center mx-auto">
          <div
            className="row d-flex justify-content-between flex-column"
            style={{ width: "100%" }}
          >
            <div className="col m-0 p-0">
              <h1 className="fw-bold m-0">Products</h1>
            </div>
            <div className="col superLightPink rounded py-2 my-2">
              <div className="flex d-inline-flex flex-wrap justify-content-around">
                {products.map((item, i) => {
                  return <Item key={i} product={item} onAdd={onAdd} />;
                })}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h2>loading</h2>
      )}
    </>
  );
};
