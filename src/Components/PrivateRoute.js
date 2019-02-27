import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { appRoutes } from '../Constants';

const PrivateRoute = ({ component: Component, ...rest }) => {
  console.log(rest);
  return (
    <Route
      {...rest}
      render={props =>
        (rest.isLoggin ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: appRoutes.PROFILE_PAGE,
              state: { from: props.location },
            }}
          />
        ))
      }
    />
  );
};

const mapStateToProps = state => ({
  auth: state.authReducer,
});

export default connect(mapStateToProps)(PrivateRoute);
