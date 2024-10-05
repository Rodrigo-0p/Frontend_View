import React           from 'react';
import { BrowserRouter as Router
      , Switch, Route } from 'react-router-dom';
import MainHome         from '../componente/MainComponete/MainHome';
import NotFound         from './AppRouter404';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={"/"}  component={MainHome}  />
        <Route component={NotFound}/>
      </Switch>
    </Router>
  );
};

export default AppRouter;