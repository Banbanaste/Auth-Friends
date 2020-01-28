import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { Container } from "reactstrap";

import PrivateRoute from "./components/PrivateRoute";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Dash from "./components/Dash";

const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <NavBar />
        <Switch>
          <PrivateRoute path="/protected" component={Dash} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
