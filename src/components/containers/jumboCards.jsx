import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Colors } from '../../utils/constants';
import '../../index.css';

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
    backgroundColor: Colors.backgroundColor,
    borderBottom: '8px solid #222',
    padding: '50px 5%',
    marginBottom: '0',
    background: '0 0',
    color: '#fff',
  },
  titleText: {
    fontSize: '2.5rem',
    lineHeight: '1.1',
    marginBottom: '.5rem',
    display: 'block',
    marginBlockStart: '0.67em',
    marginBlockEnd: '0.67em',
    marginInlineStart: '0px',
    marginInlineEnd: '0px',
    fontWeight: 'bold',
    '@media (max-width: 600px)': {
      fontSize: '1.625rem;',
      textAlign: 'center',
    },
  },
  subTitleText: {
    fontWeight: '400',
    display: 'block',
    fontSize: '1.25rem',
    marginBlockStart: '0.83em',
    marginBlockEnd: '0.83em',
    marginInlineStart: '0px',
    marginInlineEnd: '0px',
    '@media (max-width: 600px)': {
      fontSize: '1.125rem',
      textAlign: 'center',
    },
  },
  video: {
    zIndex: 2,
    width: '100%',
    height: '100%',
    maxWidth: '73%',
    maxHeight: '70%',
    position: 'absolute',
    top: '12.5%',
    left: '13%',
  },
  item: {
    position: 'relative',
    width: '50%',
    alignSelf: 'center',
    '& Typography': {
      textAlign: 'center',
    },
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
    border: '0',
  },
}));

export default function JumboCards(props) {
  const classes = useStyles();
  const { direction } = props;
  const { data } = props;
  return (
    <Grid container direction={direction} alignContent="flex-end" className={classes.root}>
      <Grid item xs={12} sm={12} md={6} className={classes.item}>
        <Typography variant="h1" className={classes.titleText}>
          {data.title}
        </Typography>
        <Typography variant="h2" className={classes.subTitleText}>
          {data.subTitle}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={6} className={classes.item}>
        {data.type === 'tv' ? (
          <div>
            <img
              alt=""
              className={classes.image}
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
            />
            <video
              autoPlay="true"
              playsInline="true"
              muted="true"
              loop="true"
              src={data.image}
              className={classes.video}
            />
          </div>
        ) : (
          <img alt="" className={classes.image} src={data.image} />
        )}
      </Grid>
    </Grid>
  );
}
