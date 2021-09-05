import React from "react";
import { Link, useHistory } from "react-router-dom";

export default function RegisterScreen() {
  const history = useHistory();
  return (
    <div className="container__auth">
      <form action="" className="form__auth">
        <div className="from__auth__heading">Register</div>
        {/* <div className="form__auth__error">error</div> */}
        <input type="text" placeholder="Name" className="form__auth__input" />
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
        <input
          type="password"
          placeholder="Confirm Password"
          className="form__auth__input"
        />
        <div className="form__auth__checkbox">
          <input
            class="styled-checkbox"
            id="styled-checkbox-2"
            type="checkbox"
            value="value1"
          />
          <label for="styled-checkbox-2">
            I Agree to
            <Link to="/terms_conditions" className="form__auth__link">
              Terms & conditions
            </Link>
          </label>
        </div>
        <button className="form__auth__cta" onClick={() => history.push("/")}>
          Register
        </button>
        <button
          className="form__auth__cta"
          // onClick={() => history.push("/home")}
        >
          Login with google
        </button>
        <div className="form__auth__text">
          Already have an account?
          <Link to="/" className="form__auth__link">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
}
