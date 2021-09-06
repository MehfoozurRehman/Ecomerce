import React, { useEffect, useState } from "react";
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
          <Route path="/" exact>
            <HomeScreen />
          </Route>
          <Route path="/login">
            <LoginScreen />
          </Route>
          <Route path="/register" component={RegisterScreen} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
