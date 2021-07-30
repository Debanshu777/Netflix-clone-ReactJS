import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Button } from '@material-ui/core';
import { Link as ReactRouterLink } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  root: {
    boxShadow: 'none',
    zIndex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '97%',
    backgroundColor: 'transparent',
    height: '4rem',
    justifyContent: 'flex-start',
    margin: '0 auto',
    paddingTop: '10px',
  },
  image: {
    display: 'flex',
    position: 'absolute',
    width: '10.575rem',
    height: '3.25rem',
    '@media (max-width: 600px)': {
      height: '2.5rem',
    },
  },
  span: {
    flex: '1',
  },
}));

export default function Header(props) {
  const { to } = props;
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <img alt="logo" className={classes.image} src="/images/logo.svg" />
        <span className={classes.span} />
        {to !== '' ? (
          <ReactRouterLink to={to} style={{ textDecoration: 'none' }}>
            <Button color="primary" variant="contained">
              Sign In
            </Button>
          </ReactRouterLink>
        ) : (
          <div />
        )}
      </Toolbar>
    </AppBar>
  );
}
