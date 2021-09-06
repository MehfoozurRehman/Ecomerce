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
  const [user, setUser] = useState([]);

  async function handleLogin(e) {
    e.preventDefault();
    axios
      .post("/api/v1/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        setUser(res.data);
      });
    if (remember) {
      localStorage.setItem("userFromJWT", JSON.stringify(user));
    }

    history.push("/");
  }
  function googleSuccess(res) {
    const result = res?.profileObj;
    const token = res?.tokenId;

    localStorage.setItem("userFormGoogle", JSON.stringify(result, token));
    // console.log(JSON.parse(localStorage.getItem("userFromGoogle")));
    history.push("/");
  }
  function googleFailure() {
    console.log("fail to login");
  }
  return (
    <div className="container__auth">
      <form className="form__auth" onSubmit={handleLogin}>
        <div className="from__auth__heading">Login</div>
        {error && <div className="form__auth__error">{error}</div>}
        <input
          type="email"
          placeholder="Email Address"
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
