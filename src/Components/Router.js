import React from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import Feed from "../Routes/Feed";
import AuthContainer from "../Routes/Auth";

const LoggedInRoutes = () => (
  <>
    <Route exact path="/" component={Feed} />
  </>
);

const LoggedOutRoutes = () => (
  <>
    <Route exact path="/" component={AuthContainer} />
  </>
);

const RouterComponent = ({ isLoggedIn }) => (
  <Switch>{isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />}</Switch>
);

RouterComponent.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

export default RouterComponent;
