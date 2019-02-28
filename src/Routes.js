import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { appRoutes } from './Constants';

// Initialize Page Components
import Profile from './Pages/Profile';
import OtherPage from './Pages/OtherPage';
import NotFoundPage from './Pages/NotFoundPage';

export default function Routes() {
  return (
    <Switch>
      <Route path={appRoutes.PROFILE_PAGE} component={Profile} />
      <Route path={appRoutes.OTHER_PAGE} component={OtherPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
}
