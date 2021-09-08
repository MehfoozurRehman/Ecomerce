import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import axios from "../axios";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [remember, setRemember] = useState(false);
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();
    await axios
      .post("/api/user/login", { email: email, password: password })
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        localStorage.setItem("userToken", JSON.stringify(res.data.token));
      });
    history.push("/");
  }
  // function googleSuccess(res) {
  //   const result = res?.profileObj;
  //   const token = res?.tokenId;

  //   localStorage.setItem("userFormGoogle", JSON.stringify(result, token));
  //   // console.log(JSON.parse(localStorage.getItem("userFromGoogle")));
  //   history.push("/");
  // }
  // function googleFailure() {
  //   console.log("fail to login");
  // }
  return (
    <div className="container__auth">
      <form className="form__auth" onSubmit={handleLogin}>
        <div className="from__auth__heading">Login</div>
        {error && <div className="form__auth__error">{error}</div>}
        <input
          type="email"
          placeholder="Email Address"
          name="email"
          className="form__auth__input"
          required
          autoFocus
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="form__auth__input"
          required
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <div className="form__auth__checkbox">
          <input
            className="styled-checkbox"
            id="styled-checkbox-1"
            type="checkbox"
            value="value1"
            checked={remember}
            onChange={(e) => {
              if (!remember) {
                setRemember(true);
              } else if (remember) {
                setRemember(false);
              }
            }}
          />
          <label htmlFor="styled-checkbox-1">Remember Me</label>
        </div>
        <button type="submit" className="form__auth__cta">
          Login
        </button>
        {/* <GoogleLogin
          clientId="355043348426-hrlofmacs3ph0qhhis03u08h5lbcvkd7.apps.googleusercontent.com"
          render={(renderProps) => (
            <button
              type="button"
              className="form__auth__cta"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              Login with google
            </button>
          )}
          onSuccess={googleSuccess}
          onFailure={googleFailure}
          cookiePolicy="single_host_origin"
        /> */}
        <div className="form__auth__text">
          Don't have an account?
          <Link to="/register" className="form__auth__link">
            Register
          </Link>
        </div>
      </form>
    </div>
  );
}
