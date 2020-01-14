import React from "react";
import { Switch, Route, Redirect } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Auth from "../pages/Auth";

export const Routes = ({ isAuth = true }) => {
  if (isAuth) {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Redirect to="/" />
      </Switch>
    );
  }
  return (
    <Switch>
      <Route path="/auth" component={Auth} />
      <Redirect to="/auth" />
    </Switch>
  );
};
