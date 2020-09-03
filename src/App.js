import React from "react";
import Nav from "./components/navbar/Nav";
import Color from "./components/Color";
import Hexa from "./components/Hexa";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './styles.css'
function App() {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Color} />
          <Route exact path="/hexa" component={Hexa} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
