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
    borderRadius: '0.2vw',
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

const Banner = (props) => {
  const classes = useStyles();
  const { bannerData } = props;

  /**
   * @param  {} string
   * @param  {} n
   */
  const truncate = (string, n) => (string?.length > n ? `${string.substr(0, n - 1)}...` : string);

  return (
    <header
      className={classes.banner}
      style={{
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${bannerData?.backdrop_path}')`,
      }}
    >
      <div className={classes.bannerContainer}>
        <h1 className={classes.bannerTitle}>{bannerData?.name || bannerData?.title || bannerData?.original_name}</h1>
        <div className={classes.bannerButtons}>
          <Button className={classes.button}>Play</Button>
          <Button className={classes.button}>My List</Button>
        </div>
        <h1 className={classes.bannerDescription}>{truncate(bannerData?.overview, 150)}</h1>
      </div>
      <div className={classes.bannerFade} />
    </header>
  );
};

export default Banner;
