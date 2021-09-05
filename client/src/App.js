import React, { useEffect } from "react";
import "./App.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import LoginScreen from "./Screens/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import axios from "./axios";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/login" exact component={LoginScreen} />
          <Route path="/register" exact component={RegisterScreen} />
          <Route path="/" exact component={HomeScreen} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
