import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';

import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
  rootBox: {
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center'
    }
  },
  footerNav: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: theme.spacing(0),
    [theme.breakpoints.down('md')]: {
      width: '100%',
      marginTop: theme.spacing(3),
    }
  },
  footerLink: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(2),
    }
  },
  footerCopy: {
    borderTopWidth: 1,
    borderTopStyle: 'solid',
    borderTopColor: theme.palette.background.emphasis,
  },
  copy: {
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      marginLeft: 'auto',
      marginRight: 'auto',
    }
  },
  icons: {
    [theme.breakpoints.down('md')]: {
      marginRight: 'auto',
    }
  }
}));

export default function Footer(props) {
  const classes = useStyles();

  const content = {
    'brand': { image: 'nereus-assets/img/nereus-light.png', width: 110 },
    'copy': '© 2020 Nereus. All rights reserved.',
    'link1': 'First Link',
    'link2': 'Second Link',
    'link3': 'Third Link',
    'link4': 'Fourth Link',
    ...props.content
  };

  let brand;

  if (content.brand.image) {
    brand = <img src={ content.brand.image } alt="" width={ content.brand.width } />;
  } else {
    brand = content.brand.text || '';
  }

  return (
    <footer>
      <Container maxWidth="lg">
        <Box pt={6} pb={2} display="flex" flexWrap="wrap" alignItems="center" className={classes.rootBox}>
          <Link href="#" color="inherit" underline="none">
            {brand}
          </Link>
          <Box component="nav" ml="auto" className={classes.footerNav}>
            <Link href="#" variant="body1" color="textPrimary" className={classes.footerLink}>{content['link1']}</Link>
            <Link href="#" variant="body1" color="textPrimary" className={classes.footerLink}>{content['link2']}</Link>
            <Link href="#" variant="body1" color="textPrimary" className={classes.footerLink}>{content['link3']}</Link>
            <Link href="#" variant="body1" color="textPrimary" className={classes.footerLink}>{content['link4']}</Link>
          </Box>
        </Box>
        <Box pt={1} pb={6} display="flex" flexWrap="wrap" alignItems="center" className={classes.footerCopy}>
          <Typography color="textSecondary" component="p" variant="caption" gutterBottom={false} className={classes.copy}>{content['copy']}</Typography>
          <Box ml="auto" className={classes.icons}>
            <IconButton color="inherit" aria-label="Facebook">
              <FacebookIcon />
            </IconButton>
            <IconButton color="inherit" aria-label="Twitter">
              <TwitterIcon />
            </IconButton>
            <IconButton color="inherit" aria-label="Instagram">
              <InstagramIcon />
            </IconButton>
            <IconButton color="inherit" aria-label="LinkedIn">
              <LinkedInIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </footer>
  );
}