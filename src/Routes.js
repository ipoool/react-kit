import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { appRoutes } from './Constants';

// Initialize Page Components
import HomePage from './Pages/HomePage';
import OtherPage from './Pages/OtherPage';
import NotFoundPage from './Pages/NotFoundPage';

export default function Routes() {
    return (
      <Router>
        <Switch>
          <Route exact path={appRoutes.HOME_PAGE} component={HomePage} />
          <Route path={appRoutes.OTHER_PAGE} component={OtherPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    )
}