import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { emphasize, fade, darken, lighten } from '@material-ui/core/styles/colorManipulator';

import clsx from 'clsx';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  section: {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundColor: theme.palette.primary.dark,
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(12),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(30),
      paddingBottom: theme.spacing(30),
    }
  },
  description: {
    color: theme.palette.background.secondary
  },
  primaryAction: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      marginRight: theme.spacing(0),
      marginBottom: theme.spacing(2),
    }
  },
  secondaryAction: {
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    }
  }
}
));

export default function Component(props) {
  const classes = useStyles();

  return (
<section className={classes.section} style={{ backgroundImage: 'url("nereus-assets/img/bg/pattern2.png")' }}>
  <Container maxWidth="md">
    <Box textAlign="center" color="common.white">
      <Typography variant="h2" component="h2" gutterBottom={true}>
        <Typography color="secondary" variant="h2" component="span">Trad3U </Typography>
        <Typography variant="h2" component="span">The Digital  Revolution is</Typography>
      </Typography>
      <Container maxWidth="sm">
        <Typography variant="subtitle1" color="textSecondary" paragraph={true} className={classes.description}>Coming Soon.</Typography>
      </Container>
  
    </Box>
  </Container>
</section>
  );
}