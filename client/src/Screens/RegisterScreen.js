import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "../axios";

export default function RegisterScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const history = useHistory();

  function handleRegister(e) {
    e.preventDefault();
    axios
      .post("/api/v1/signup", {
        name: name,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      })
      .then((res) => {
        console.log(res.data);
      });
    history.push("/login");
  }

  return (
    <div className="container__auth">
      <form className="form__auth" onSubmit={handleRegister}>
        <div className="from__auth__heading">Register</div>
        {/* <div className="form__auth__error">error</div> */}
        <input
          type="text"
          placeholder="Name"
          className="form__auth__input"
          required
          autoFocus
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="email"
          placeholder="Email Address"
          className="form__auth__input"
          required
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
        <input
          type="password"
          placeholder="Confirm Password"
          className="form__auth__input"
          required
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
        />
        <div className="form__auth__checkbox">
          <input
            className="styled-checkbox"
            id="styled-checkbox-2"
            type="checkbox"
            value="value1"
            checked={agreeTerms}
            onChange={() => {
              if (!agreeTerms) {
                setAgreeTerms(true);
              } else if (agreeTerms) {
                setAgreeTerms(false);
              }
            }}
          />
          <label htmlFor="styled-checkbox-2">
            I Agree to
            <Link to="/terms_conditions" className="form__auth__link">
              Terms & conditions
            </Link>
          </label>
        </div>
        <button
          type="submit"
          className="form__auth__cta"
          disabled={!agreeTerms}
        >
          Register
        </button>
        <div className="form__auth__text">
          Already have an account?
          <Link to="/login" className="form__auth__link">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
}
