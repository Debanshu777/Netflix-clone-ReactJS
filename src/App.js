import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Home, Browse, SignIn, SignUp } from './components/screen';
import * as ROUTES from './utils/routes';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#111',
  },
}));
export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Router>
        <Route exact path={ROUTES.HOME}>
          <Home />
        </Route>
        <Route exact path={ROUTES.BROWSE}>
          <Browse />
        </Route>
        <Route exact path={ROUTES.SIGN_IN}>
          <Browse />
        </Route>
        <Route exact path={ROUTES.SIGN_UP}>
          <SignUp />
        </Route>
      </Router>
    </div>
  );
}
