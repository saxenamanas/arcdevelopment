import React from 'react';
import Lottie from 'react-lottie';
import {makeStyles,useTheme} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ArrowButton from './ui/ArrowButton';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import animationData from './../animations/landinganimation/data';
import customSoftware from '../assets/Custom Software Icon.svg';
import mobileAppsIcon from '../assets/mobileIcon.svg'
import websiteIcon from '../assets/websiteIcon.svg';
import revolutionBack from '../assets/repeatingBackground.svg'


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
    ...theme.typography.learnButton,
    fontSize: '0.9rem',
    height: 45,
    width: 145,
  },
  learnButton:{
    ...theme.typography.learnButton,
    padding: 5,
    height: 35,
    fontSize: "0.75rem",
    [theme.breakpoints.down("sm")]:{
      marginBottom:"2em"
    }
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
  },
  specialText:{
    fontFamily: "Pacifico",
    color: theme.palette.common.orange
  },
  subtitle:{
    marginBottom:"1em"
  },
  icon:{
    marginLeft:"2em",
    [theme.breakpoints.down("xs")]:{
      marginLeft:0,
    }
  },
  serviceBlock:{
    marginTop:"12em"
  },
  revolutionBlock:{
    backgroundImage: `url(${revolutionBack})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
  cardRev:{
    position: "absolute",
    boxShadow: theme.shadows[10],
    padding: "10em",
    borderRadius: 15,
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
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
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
          {/*App Block*/}
          <Grid className={classes.serviceBlock} item>
            <Grid justify={matchesSM?"center":undefined} container direction="row">
              <Grid style={{marginLeft:matchesSM?0:"5em",textAlign:matchesSM?"center":undefined}} item>
                <Typography variant="h4">
                  Custom Software Development
                </Typography>
                <Typography variant="subtitle1" className={classes.subtitle}>
                  Save Energy. Save Money. Save Time.
                </Typography>
                <Typography variant="subtitle1">
                  Complete digital solutions, from investigation to{" "}
                  <span className={classes.specialText}>celebration</span>
                </Typography>
                <Button className={classes.learnButton} variant="outlined">
                     <span style={{marginRight:10}}>Learn More</span>
                      <ArrowButton height={10} width={10} fill={theme.palette.common.blue}/>
                </Button>
              </Grid>
              <Grid item>
                <img className={classes.icon} alt="custom" src={customSoftware}/>
              </Grid>
            </Grid>
          </Grid>
          <Grid className={classes.serviceBlock} item>
            <Grid justify={matchesSM?"center":"flex-end"} container direction="row">
              <Grid style={{marginLeft:matchesSM?0:"5em",textAlign:matchesSM?"center":undefined}} item>
                <Typography variant="h4">
                  iOS/Android App Development
                </Typography>
                <Typography variant="subtitle1" className={classes.subtitle}>
                  Extend Functionality. Extend Access. Increase Engagement.
                </Typography>
                <Typography variant="subtitle1">
                  Integrate your web experience or create a standalone {matchesSM?<br/>:null} with either mobile plaform.
                </Typography>
                <Button className={classes.learnButton} variant="outlined">
                     <span style={{marginRight:10}}>Learn More</span>
                      <ArrowButton height={10} width={10} fill={theme.palette.common.blue}/>
                </Button>
              </Grid>
              <Grid item style={{marginRight:matchesSM?0:"5em",textAlign:matchesSM?"center":undefined}}>
                <img className={classes.icon} alt="custom" src={mobileAppsIcon}/>
              </Grid>
            </Grid>
          </Grid>
          {/*Web Block*/}
          <Grid className={classes.serviceBlock} item>
            <Grid justify={matchesSM?"center":undefined} container direction="row">
              <Grid style={{marginLeft:matchesSM?0:"5em",textAlign:matchesSM?"center":undefined}} item>
                <Typography variant="h4">
                  Website Development
                </Typography>
                <Typography variant="subtitle1" className={classes.subtitle}>
                  Reach More. Discover More. Sell More.
                </Typography>
                <Typography variant="subtitle1">
                  Optimized for search engines. Built for speed.
                </Typography>
                <Button className={classes.learnButton} variant="outlined">
                     <span style={{marginRight:10}}>Learn More</span>
                      <ArrowButton height={10} width={10} fill={theme.palette.common.blue}/>
                </Button>
              </Grid>
              <Grid item>
                <img className={classes.icon} alt="custom" src={websiteIcon}/>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid style={{height: "100em",marginTop: "12em"}} container justify="center" alignItems="center">
            <Card className={classes.cardRev}>
              <CardContent>
                <Grid style={{textAlign:"center"}} container direction="column">
                  <Grid item>
                    <Typography gutterBottom variant="h3">
                      The Revolution
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">
                      Visionary insights coupled with cutting edge technology is a recipe for revolution.
                    </Typography>
                    <Button className={classes.learnMoreButton} variant="outlined">
                     <span style={{marginRight:10}}>Learn More</span>
                      <ArrowButton height={15} width={15} fill={theme.palette.common.blue}/>
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
            <div className={classes.revolutionBlock} />
            </Grid>
          </Grid>
        </Grid>
      );
}


export default LandingPage;