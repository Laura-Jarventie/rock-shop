import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";

import GlobalState from "./context/GlobalState";

const App = () => {
  return (
    <GlobalState>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/products" component={Products} exact />
          <Route path="/cart" component={Cart} exact />
        </Switch>
      </BrowserRouter>
    </GlobalState>
  );
};

export default App;
