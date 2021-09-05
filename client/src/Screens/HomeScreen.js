import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LogIn, LogOut, ShoppingCart } from "react-feather";

function Header({ user, setUser }) {
  return (
    <header className="header">
      <div className="header__logo">Company logo</div>
      <div className="header__buttons">
        {user ? (
          <>
            <div className="header__user__info">
              <img
                src="https://avatars.githubusercontent.com/u/68416499?v=4"
                alt="userPic"
                className="header__user__info__img"
              />
              <div className="header__user__info__name">Mehfooz</div>
            </div>
            <button
              onClick={() => {
                localStorage.clear();
                setUser(false);
              }}
              className="header__cta"
            >
              <LogOut
                size={20}
                color="currentColor"
                style={{ marginRight: ".5em" }}
              />
              Logout
            </button>
            <Link to="/cart" className="header__cta">
              <ShoppingCart
                size={20}
                color="currentColor"
                style={{ marginRight: ".5em" }}
              />
              Cart <span className="items__in__cart">1</span>
            </Link>
          </>
        ) : (
          <Link to="/login" className="header__cta">
            <LogIn
              size={20}
              color="currentColor"
              style={{ marginRight: ".5em" }}
            />
            Login
          </Link>
        )}
      </div>
    </header>
  );
}

export default function HomeScreen() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("userFromJWT"))) {
      setUser(JSON.parse(localStorage.getItem("userFromJWT")));
    } else {
      setUser(null);
    }
    // else if (JSON.parse(localStorage.getItem("userFromGoogle"))) {
    //   setUser(JSON.parse(localStorage.getItem("userFromGoogle")));
    // }
  }, []);
  console.log(user);

  return (
    <div className="container">
      <Header user={user} setUser={setUser} />
      <main className="main">
        {/* <div className="product__card"></div> */}
      </main>
      <footer className="footer"></footer>
    </div>
  );
}
