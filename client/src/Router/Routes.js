import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginScreen from "../Screens/LoginScreen";
import RegisterScreen from "../Screens/RegisterScreen";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LoginScreen} />
        <Route path="/register" exact component={RegisterScreen} />
      </Switch>
    </BrowserRouter>
  );
}
