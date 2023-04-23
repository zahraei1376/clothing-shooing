import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100vw',
    // height:'100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop:'10rem',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

const MySpinner = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress />
      {/* <CircularProgress color="secondary" /> */}
    </div>
  );
};

export default MySpinner;