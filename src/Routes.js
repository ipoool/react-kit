import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { appRoutes } from './Constants';

// Initialize Page Components
import HomePage from './Pages/HomePage';
import Profile from './Pages/Profile';
import OtherPage from './Pages/OtherPage';
import PrivatePage from './Pages/PrivatePage';
import NotFoundPage from './Pages/NotFoundPage';
import PrivateRoute from './Components/PrivateRoute';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path={appRoutes.HOME_PAGE} component={HomePage} />
        <Route path={appRoutes.PROFILE_PAGE} component={Profile} />
        <Route path={appRoutes.OTHER_PAGE} component={OtherPage} />
        <PrivateRoute path={appRoutes.PRIVATE_PAGE} component={PrivatePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}
