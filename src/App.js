import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home, Portfolio, Contact } from "./pages";
import Nav from "./components/Nav";
import "./styles/main.css";

function App() {
  return (
    <Router>
      <Nav />
      <br />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
