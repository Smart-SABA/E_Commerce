import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";

function Home() {
  let token = localStorage.getItem("token");

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const endPoint = `https://fakestoreapi.com/products/category/women's%20clothing`;
    axios.get(endPoint).then((response) => {
      const apipData = response.data;
      setProducts(apipData);
    });
  }, [setProducts]);

  return (
    <>
      {!token && <Navigate to="/" />}

      {!setProducts && (
        <>
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status"></div>
          </div>
          <span className="sr-only">Loading...</span>
        </>
      )}

      <div className="header__mb">Women;s Product</div>
      <div className="Product_container">
        <div className="Product_container">
          <nav className="Product_listHeader">
            <ul className="links">
              <li>
                <Link to="/electronics" className="nav-link active">
                  Electronics
                </Link>
              </li>

              <li>
                <Link to="/jewelery" className="nav-link active">
                  Jewelery
                </Link>
              </li>

              <li>
                <Link to="/men" className="nav-link active">
                  Men's Clothing
                </Link>
              </li>

              <li>
                <Link to="/women" className="nav-link active">
                  Women's Clothing
                </Link>
              </li>
            </ul>
          </nav>

          <div className="Product_Title">
            <div className="row">
              {products.map((el, i) => {
                return (
                  <div key={i}>
                    <h3 className="card-title">
                      {el.title} <br />{" "}
                      <Link
                        to={`/detail?productID=${el.id}`}
                        className="btn btn-success"
                      >
                        View detail
                      </Link>
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
