import { Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

import { Colors } from '../utils/constants';
import '../index.css';

const useStyles = makeStyles(() => ({
  root: {
    top: '5.7rem',
    position: 'absolute',
    minHeight: '100vh',
    maxWidth: '100vw',
    justifyItem: 'center',
    '@media (max-width: 600px)': {
      top: '0rem',
    },
  },
  placeholder: {
    width: '15%',
    '@media (max-width: 600px)': {
      width: '0%',
    },
  },
  base: {
    display: 'flex',
    width: '70%',
    justifyContent: 'center',
    justifyItem: 'center',
    textAlign: 'center',
    zIndex: 1,
    '@media (max-width: 600px)': {
      width: '100%',
    },
  },
  subTitleText: {
    display: 'block',
    paddingBottom: '20px',
    fontSize: '1.625rem',
    margin: '1rem auto',
    maxWidth: '640px',
    color: Colors.headlineTextColor,
    '@media (max-width: 600px)': {
      fontSize: '1.125rem',
      paddingBottom: '0px',
    },
  },
  text: {
    fontSize: '1.2rem',
    margin: '0 auto',
    color: Colors.headlineTextColor,
    '@media (max-width: 600px)': {
      maxWidth: '450px',
      fontSize: '18px',
      padding: '0 10%',
    },
  },
  inputField: {
    minWidth: '470px',
    height: '60px',
    padding: '10px 10px 0',
    boxSizing: 'border-box',
    fontSize: '16px',
    border: 'solid 1px #8c8c8c',
    '@media (max-width: 600px)': {
      height: '48px',
      width: '100%',
      padding: '30px 15px 0',
    },
  },
  button: {
    fontSize: '1.625rem',
    height: '60px',
    padding: '0 1em',
    position: 'relative',
    backgroundColor: '#e50914',
    margin: 'auto',
    alignItems: 'center',
    color: Colors.headlineTextColor,
    border: 'none',
    display: 'inline-flex',
    lineHeight: 'initial',
    '@media (max-width: 600px)': {
      fontSize: '1rem',
      height: '48px',
    },
  },
  main: {
    display: 'flex',
    textAlign: 'center',
    alignSelf: 'center',
    '@media (max-width: 600px)': {
      flexDirection: 'column',
    },
  },
  ul: {
    verticalAlign: 'top',
    position: 'relative',
    padding: '0px',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: '3.125rem',
    lineHeight: '1.1',
    marginBottom: '.5rem',
    display: 'block',
    maxWidth: '640px',
    margin: '0 auto',
    textAlign: 'center',
    letterSpacing: '0',
    color: Colors.headlineTextColor,
    fontWeight: 'bold',
    '@media (max-width: 600px)': {
      fontSize: '1.75rem',
    },
  },
}));
export default function StartUpPageComponent() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} direction="row">
      <Grid item className={classes.placeholder} />
      <Grid item className={classes.base} direction="column">
        <Typography variant="h2" className={classes.titleText}>
          Unlimited movies, TV shows and more.
        </Typography>
        <Typography variant="h2" className={classes.subTitleText}>
          Watch anywhere. Cancel anytime.
        </Typography>
        <Typography variant="h2" className={classes.text}>
          Ready to watch? Enter your email to create or restart your membership.
        </Typography>
        <div className={classes.main}>
          <ul className={classes.ul}>
            <li>
              <label htmlFor="email">
                <input
                  className={classes.inputField}
                  type="email"
                  id="id_email_hero_fuji"
                  value=""
                  tabIndex="0"
                  autoComplete="email"
                  maxLength="50"
                  minLength="5"
                  dir=""
                />
                <label style={{ fontSize: '18px', position: 'absolute', top: '35%', left: '10px', color: '#8c8c8c' }}>
                  Email address
                </label>
              </label>
            </li>
          </ul>

          <button
            className={classes.button}
            type="submit"
            autoComplete="off"
            tabIndex="0"
            role="link"
            data-uia="our-story-cta-hero_fuji"
          >
            <span className="cta-btn-txt">Get Started</span>
            <span className="chevron-right-arrow">
              <svg viewBox="0 0 6 12" xmlns="http://www.w3.org/2000/svg">
                <desc>chevron</desc>
                <path d="M.61 1.312l.78-.624L5.64 6l-4.25 5.312-.78-.624L4.36 6z" fill="none" fillRule="evenodd" />
              </svg>
            </span>
          </button>
        </div>
      </Grid>
      <Grid item className={classes.placeholder} />
    </Grid>
  );
}
