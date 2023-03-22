import React from "react";
import { useNavigate, Navigate } from "react-router-dom";
import swAlert from "@sweetalert/with-react";

function Login() {
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;

    if (username === "" || password === "") {
      swAlert("", "Please enter the data requested", "error");

      return;
    }

    if (username !== "saba@gmail.com" || password !== "123") {
      swAlert(
        "Use these data to Log in:",
        "username: saba@gmail.com AND password: 123",
        "error"
      );

      return;
    }

    const token = "myfakeapitoken";
    localStorage.setItem("token", token);
    navigate("/home");
  };

  let token = localStorage.getItem("token");

  return (
    <>
      {token && <Navigate to="/home" />}

      <div className="login_container">
        <div className="login_content">
          <h1>
            {" "}
            Welcome back to{" "}
            <span style={{ color: "#ff1d8e" }}>Preety Login</span>
          </h1>
          <p style={{ margin: "20px", color: "black" }}>
            It's Great to have you back !
          </p>

          <form onSubmit={submitHandler}>
            <div className="login_form">
              <label>Email</label>
              <br />
              <input type="email" name="username" placeholder="Username:" />
              <br />
              <label>Password </label> <br />
              <input type="password" name="password" placeholder="Password:" />
              <br />
            </div>

            <div className="login_checkbox">
              <div>
                <input type="checkbox"></input>
                <label>Remember me ? </label>
              </div>
              <a href="#">Forgot Password</a>
            </div>
            <div className="login_button">
              <button id="login" type="submit">
                Login
              </button>
              <button id="create" type="reset">
                Create Account
              </button>
            </div>
          </form>

          <div className="another_login">
            <p style={{ color: "black" }}>Or login with</p>
            <a href="#">Facebook</a>
            <a href="#" target={""}>
              Google
            </a>
          </div>
        </div>

        <div className="login_img">
          <img src="https://images.unsplash.com/photo-1605184861755-8f190fea96a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" />
        </div>
      </div>
    </>
  );
}

export default Login;
