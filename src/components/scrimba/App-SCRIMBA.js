import React from "react";
import "./App.css";
import Game from "./components/Game";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";
import { Link, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Link to="/">Products</Link>
      <br />
      <Link to="/game">Game</Link>

      <Switch>
        <Route exact path="/">
          <Products />
        </Route>
        <Route exact path="/products">
          <Game />
        </Route>
        <Route path="/products/:productId">
          <ProductDetail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
