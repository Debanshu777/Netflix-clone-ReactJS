import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';

import { Colors } from '../utils/constants';
import '../index.css';

const listOfData = [
  'FAQ',
  'Help Centre',
  'Account',
  'Media Centre',
  'Investor Relations',
  'Jobs',
  'Ways to Watch',
  'Terms of Use',
  'Privacy',
  'Cookie Preferences',
  'Corporate Information',
  'Contact Us',
  'Speed Test',
  'Legal Notices',
  'Only on Netflix',
];

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: Colors.backgroundColor,
    display: 'block',
    justifyContent: 'center',
  },
  content: {
    display: 'flex',
    backgroundColor: Colors.backgroundColor,
    padding: '70px 45px',
    maxWidth: '1000px',
    margin: '0 auto',
    flexDirection: 'column',
  },
  text: {
    fontFamily: 'Netflix Sans',
    fontSize: 'small',
  },
  divider: {
    height: '30px',
  },
  select: {
    padding: '12px',
    lineHeight: '1.7',
    backgroundColor: '#000',
    backgroundImage: 'none',
    border: '1px solid #333',
    color: '#999',
    fontSize: '16px',
  },
  grid: {
    minWidth: '190px',
    width: '90%',
    paddingBottom: '20px',
    fontSize: '1em',
    margin: '0 auto',
    color: '#757575',
    position: 'relative',
  },
}));
export default function Footer() {
  const classes = useStyles();
  return (
    <fragment className={classes.root}>
      <div className={classes.content}>
        <Grid container className={classes.grid}>
          <Grid xs={12} md={12} className={classes.text}>
            <p>Questions? Call 000-800-040-1843</p>
          </Grid>
          <text className={classes.divider} />
          {listOfData.map((e) => (
            <Grid item xs={6} sm={4} md={3} className={classes.text}>
              <p>{e}</p>
            </Grid>
          ))}
          <span className={classes.divider} />
          <Grid xs={12} md={12} className={classes.text}>
            <p>Netflix India</p>
          </Grid>
        </Grid>
      </div>
    </fragment>
  );
}
