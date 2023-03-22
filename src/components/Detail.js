import React from "react";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import Header from "./Header";

function Detail() {
  let token = localStorage.getItem("token");

  const [productDetail, setProductDetail] = useState(null);

  let query = new URLSearchParams(window.location.search);
  let productID = query.get("productID");

  console.log(productID);

  useEffect(() => {
    const endPoint = `https://fakestoreapi.com/products/${productID}`;
    axios.get(endPoint).then((response) => {
      const movieData = response.data;
      console.log(movieData);
      setProductDetail(movieData);
    });
  }, [setProductDetail]);

  return (
    <>
      {!token && <Navigate to="/" />}

      <div className="header__mb">
        <Header />
      </div>

      <br />

      {!productDetail && (
        <>
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status"></div>
          </div>
          <span className="sr-only">Loading...</span>
        </>
      )}

      {productDetail && (
        <>
          <div className="detalle__contenedor">
            <img
              src={productDetail.image}
              alt={productDetail.title}
              className="detalle__poster"
            />

            <div className="detalle__desc">
              <h2>Product Name</h2>
              <p>{productDetail.title}</p>
              <h2>Product Price</h2>
              <p>${productDetail.price}.-</p>
              <br />
              <h2>Description:</h2>
              <p>{productDetail.description}</p>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Detail;
