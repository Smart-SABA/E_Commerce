import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";

function User() {
  let token = localStorage.getItem("token");
  const [productDetalle, setProductDetalle] = useState(null);

  let query = new URLSearchParams(window.location.search);
  let productID = query.get("productID");

  console.log("product id");
  console.log(productID);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const endPoint = `https://randomuser.me/api/?results=10`;
    axios.get(endPoint).then((response) => {
      const apipData = response.data;
      console.log(apipData);
      setProducts(apipData);
    });
  }, [setProducts]);

  return (
    <>
      {!token && <Navigate to="/" />}

      <div className="header__mb">
        <Header />
      </div>
      <div>
        <h1>User Details</h1>

        <p
          style={{
            background: "linear-gradient(to right, #01004b, #38000e)",
            margin: "20px",
            color: "#fff",
            fontSize: "20px",
            padding: "30px",
            lineHeight: "1.5em",
            height: "4  5vh",
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. Why do we use it? It is a long
          established fact that a reader will be distracted by the readable
          content of a page when looking at its layout. The point of using Lorem
          Ipsum is that it has a more-or-less normal distribution of letters, as
          opposed to using 'Content here, content here', making it look like
          readable English. Many desktop publishing packages and web page
          editors now use Lorem Ipsum as their default model text, and a search
          for 'lorem ipsum' will uncover many web sites still in their infancy.
        </p>

        <div className="user_Radio">
          <div>
            <input type="radio" id="Choice1" name="all" value="email" />
            <label for="contactChoice1">ALL</label>
          </div>

          <div>
            <input type="radio" id="Choice2" name="m" value="phone" />
            <label for="contactChoice2">Male</label>
          </div>

          <div>
            {" "}
            <input type="radio" id="Choice3" name="f" value="female" />
            <label for="contactChoice3">Female</label>
          </div>
        </div>
        <table>
          <th>Image</th>
          <th>Name</th>
          <th>Email</th>
          <th>gender</th>
        </table>
      </div>

      {!products && (
        <>
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status"></div>
          </div>
          <span className="sr-only">Loading...</span>
        </>
      )}
    </>
  );
}

export default User;
