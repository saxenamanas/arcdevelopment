import React from 'react';
import Lottie from 'react-lottie';
import {makeStyles,useTheme} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ArrowButton from './ui/ArrowButton';
import Typography from '@material-ui/core/Typography';

import animationData from './../animations/landinganimation/data';


const useStyles = makeStyles(theme=>({
  animBlock:{
    maxWidth : "50em",
    minWidth : "21em",
    marginTop : "2em",
    marginLeft : "10%"
  },
  estimate:{
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    "&:hover":{
      backgroundColor: theme.palette.secondary.light,
    }
  },
  buttonContainer:{
    marginTop:'1em',
  },
  learnMoreButton:{
    color: theme.palette.common.blue,
    borderColor: theme.palette.common.blue,
    borderWidth: 2,
    textTransform: 'none',
    borderRadius: 50,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: '0.9rem',
    height: 45,
    width: 145,
  },
  mainContainer:{
    marginTop: "5em",
  },
  [theme.breakpoints.down('md')]:{
    marginTop: '3em',
  },
  [theme.breakpoints.down('xs')]:{
    marginTop: '2em',
  },
  heroTextContainer:{
    minWidth:"21.5em",
    marginLeft: "1em",
  }
}));

const LandingPage = ()=>{
    const classes = useStyles();
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
    const theme = useTheme();
    
      return  (
        <Grid container className={classes.mainContainer} direction="column">
          <Grid item>
            <Grid justify="flex-end" alignItems="center" direction="row" container>
              <Grid sm item>
                <Typography variant={"h2"} align="center">Bringing west coast technology <br/> to mid</Typography>
                <Grid container className={classes.buttonContainer} justify="center" direction="row">
                  <Grid item>
                    <Button className={classes.estimate} variant="contained">Free estimate</Button>
                  </Grid>
                  <Grid item>
                    <Button className={classes.learnMoreButton} variant="outlined">
                     <span style={{marginRight:10}}>Learn More</span>
                      <ArrowButton height={15} width={15} fill={theme.palette.common.blue}/>
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid sm item className={classes.animBlock}>
                <Lottie options={defaultOptions} width={"100%"} height={"100%"}/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      );
}


export default LandingPage;