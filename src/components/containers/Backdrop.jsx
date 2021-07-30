import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    height: '707.323px',
    maxWidth: '100%',
    zIndex: 10,
    objectFit: 'cover',
    borderBottom: '8px solid #222',
    '@media (max-width: 600px)': {
      height: '518.125px',
    },
  },
}));

export default function Backdrop() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img alt="" className={classes.root} src="/images/misc/home-bg.jpg" />
    </div>
  );
}
