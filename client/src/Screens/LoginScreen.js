import React from "react";
import { Link, useHistory } from "react-router-dom";

export default function LoginScreen() {
  const history = useHistory();
  return (
    <div className="container__auth">
      <form action="" className="form__auth">
        <div className="from__auth__heading">Login</div>
        {/* <div className="form__auth__error">error</div> */}
        <input
          type="email"
          placeholder="Email Address"
          className="form__auth__input"
        />
        <input
          type="password"
          placeholder="Password"
          className="form__auth__input"
        />
        <div className="form__auth__checkbox">
          <input
            class="styled-checkbox"
            id="styled-checkbox-1"
            type="checkbox"
            value="value1"
          />
          <label for="styled-checkbox-1">Remember Me</label>
        </div>
        <button
          className="form__auth__cta"
          onClick={() => history.push("/home")}
        >
          Login
        </button>
        <button
          className="form__auth__cta"
          // onClick={() => history.push("/home")}
        >
          Login with google
        </button>
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
