import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

// Components
import Home from "../Layout/Home/Home";
import NavBar from "../Layout/NavBar/NavBar";
import ToCrypto from "../Layout/toCrypto/toCrypto";
import ToCurrency from "../Layout/toCurrency/toCurrency";

const Routes = () => {
  return (
    <Fragment>
        <NavBar />
        <Switch>
          <Route path="/" component={ Home } exact />
          <Route path="/to-crypto" component={ ToCrypto } exact />
          <Route path="/to-currency" component={ ToCurrency } exact />
        </Switch>
      </Fragment>
  );
};

export default Routes;
