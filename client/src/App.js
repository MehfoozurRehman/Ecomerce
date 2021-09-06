import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Components/Header";
import HomeScreen from "./Screens/HomeScreen";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact>
            <HomeScreen />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
