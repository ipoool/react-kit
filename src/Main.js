import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import { appRoutes } from './Constants';

import HomePage from './Pages/HomePage';
import Login from './Pages/Login';
import PrivateRoute from './PrivateRoute';

import Routes from './Routes';
import { authentication } from './Actions/auth';
import { GetStorage } from './Helpers';

class Main extends React.Component {
  componentDidMount() {
    const { authAction } = this.props;
    const token = GetStorage('token');
    // check existing token
    if (token) {
      // dispacth action authentication
      authAction();
    }
  }

  render() {
    return (
      <Switch>
        <Route exact path={appRoutes.HOME_PAGE} component={HomePage} />
        <Route path={appRoutes.LOGIN_PAGE} component={Login} />
        <PrivateRoute component={Routes} />
      </Switch>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.authReducer,
});
const mapDispatchToProps = dispatch => ({
  authAction: () => dispatch(authentication()),
});
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Main),
);
