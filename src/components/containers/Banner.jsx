import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  banner: {
    height: '448px',
    position: 'relative',
    color: 'white',
    objectFit: 'contains',
  },
  bannerContainer: {
    marginLeft: '30px',
    paddingTop: '140px',
    height: '190px',
  },
  bannerTitle: {
    fontSize: '3rem',
    fontWeight: '800',
    paddingBotton: '0.3rem',
  },
  bannerButtons: {},
  button: {
    cursor: 'pointer',
    color: '#fff',
    outline: 'none',
    border: 'none',
    fontWeight: '700',
    boredrRadius: '0.2vw',
    paddingLeft: '2rem',
    paddingRight: '2rem',
    marginRight: '1rem',
    paddingTop: '0.5rem',
    backgroundColor: 'rgba(51,51,51,0.5)',
    paddingBottom: '0.5rem',
    '&:hover': {
      color: '#000',
      backgroundColor: '#e6e6e6',
      transition: 'all 0.2s',
    },
  },
  bannerDescription: {
    width: '45rem',
    lineHeight: '1.3',
    paddingTop: '1rem',
    fontSize: '0.8rem',
    maxWidth: '360px',
    height: '80px',
  },
  bannerFade: {
    height: '7.4rem',
    backgroundImage: 'linear-gradient(180deg,transparent,rgba(37,37,0.61),#111);',
  },
}));

export default function Banner() {
  const classes = useStyles();
  function truncate(string, n) {
    return string?.length > n ? `${string.substr(0, n - 1)}...` : string;
  }
  return (
    <header
      className={classes.banner}
      style={{
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundImage: `url('https://wallpapercave.com/wp/wp1917118.jpg')`,
      }}
    >
      <div className={classes.bannerContainer}>
        <h1 className={classes.bannerTitle}>Movie Name</h1>
        <div className={classes.bannerButtons}>
          <Button className={classes.button}>Play</Button>
          <Button className={classes.button}>My List</Button>
        </div>
        <h1 className={classes.bannerDescription}>{truncate(`here`, 150)}</h1>
      </div>
      <div className={classes.bannerFade} />
    </header>
  );
}
