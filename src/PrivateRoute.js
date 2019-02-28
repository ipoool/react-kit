import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { appRoutes } from './Constants';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      (rest.auth.isLoggin ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: appRoutes.LOGIN_PAGE,
            state: { from: props.location },
          }}
        />
      ))
    }
  />
);

const mapStateToProps = state => ({
  auth: state.authReducer,
});

export default connect(mapStateToProps)(PrivateRoute);
