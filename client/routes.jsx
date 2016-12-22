import React from "react";
import {Route, IndexRoute} from "react-router";
import Home from "./components/home";
import LocalePicker from "./components/localePicker";

export const routes = (
  <Route path="/">
    <IndexRoute component={LocalePicker} />
    <Route path=":locale">
      <Route path="custom-url" component={Home} />
    </Route>
  </Route>
);
