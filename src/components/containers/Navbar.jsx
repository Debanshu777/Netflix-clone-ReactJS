import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  navBlack: {
    background: '#111',
    position: 'fixed',
    top: '0',
    width: '100%',
    padding: '20px',
    height: '20px',
    zIndex: '1',
    /* Animation */
    transitionTimingFunction: 'ease-in',
    transition: 'all 0.5s',
  },
  nav: {
    position: 'fixed',
    top: '0',
    width: '100%',
    padding: '20px',
    height: '20px',
    zIndex: '1',
    /* Animation */
    transitionTimingFunction: 'ease-in',
    transition: 'all 0.5s',
  },
  navContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  logo: {
    position: 'fixed',
    left: '0',
    top: '0',
    width: '80px',
    cursor: 'pointer',
  },
  avater: {
    position: 'fixed',
    right: '10px',
    top: '12px',
    width: '30px',
    cursor: 'pointer',
  },
}));

export default function Navbar() {
  const [show, setShow] = useState(false);
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar);
    return () => window.removeEventListener('scroll', transitionNavBar);
  }, []);
  const classes = useStyles();
  return (
    <div className={show ? classes.navBlack : classes.nav}>
      <div className={classes.navContainer}>
        <img className={classes.logo} src="/images/logo.svg" alt="" />
        <img className={classes.avater} src="/images/netflixAvatar.png" alt="" />
      </div>
    </div>
  );
}
