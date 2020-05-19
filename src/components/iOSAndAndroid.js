import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {makeStyles,useTheme} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Lottie from 'react-lottie';
import CallToAction from './ui/CallToAction';

import forwardIcon from '../assets/forwardArrow.svg';
import backwardIcon from '../assets/backArrow.svg';
import integration from '../animations/integrationAnimation/data.json';
import extendedAccess from '../assets/extendAccess.svg';
import swiss from '../assets/swissKnife.svg';
import engagement from '../assets/increaseEngagement.svg';

const useStyles = makeStyles(theme=>({
    mainContainer:{
        paddingLeft: "4em",
        paddingTop: "2em",
        paddingRight: "2em",
        paddingBottom: "4em"
    },
    arrow:{
        marginTop: "0.5em"
    },
    description:{
        maxWidth:"40em",
        [theme.breakpoints.down("sm")]:{
            textAlign:"center"
        },
    },
    integration:{
        height: "50em"
    },
    heading:{
        fontWeight: 700,
        fontSize:"1.75rem",
    },
    headingData:{
        maxWidth: "30em",
    
    },
}));

const AppDev = ()=>{
    const theme = useTheme();
    const classes = useStyles();
    const matches = useMediaQuery(theme.breakpoints.down("sm"));

    const integrationOptions = {
        loop: true,
        autoplay: true, 
        animationData: integration,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };


    return(
        <React.Fragment>
            <Grid className={classes.mainContainer} container direction="column">
                <Grid item>
                    <Grid container direction="row">
                        <Grid style={{marginLeft:"-3.5em"}} className={classes.arrow} item>
                            <IconButton>
                                <img src={backwardIcon} alt="forward"></img>
                            </IconButton>
                        </Grid>
                        <Grid style={{marginLeft:"1em",marginRight:"1em",align:matches?"center":"undefined"}} item>
                            <Typography variant="h2">
                            iOS/Android App Development
                            </Typography>
                        </Grid>
                        <Grid className={classes.arrow} item>
                        <IconButton >
                                <img src={forwardIcon} alt="forward"></img>
                            </IconButton>
                        </Grid>                       
                    </Grid>
                </Grid>
                <Grid className={classes.description} item>
                <Typography variant="body1">
                Mobile apps allow you to take your tools on the go.
                <br/></Typography>
                <Typography variant="body1">
                Whether you want an app for your customers, employees, or yourself, we can build cross-platform native solutions for any part of your business process. This opens you up to a whole new world of possibilities by taking advantage of phone features like the camera, GPS, push notifications, and more.
                <br/></Typography>
                <Typography variant="body1">
                Convenience. Connection.
                <br/><br/></Typography>
                </Grid>
                <Grid item>
                    <Grid container className={classes.integration} justify="center" alignItems="center" direction="row">
                        <Grid item>
                            <Grid container className={classes.headingData} direction="column">
                                <Grid item>
                                <Typography className={classes.heading} variant="h4">
                                    Digital Documents & Data
                                </Typography>
                                </Grid>
                                <Grid item>
                                <Typography variant="body1">
                                Our technology enables an innate interconnection between web and mobile applications, putting everything you need right in one convenient place.
                                </Typography>
                                <Typography variant="body1">
                                This allows you to extend your reach, reinvent interactions, and develop a stronger relationship with your users than ever before.
                                </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                        <Lottie options={integrationOptions} style={{maxHeight:500,maxWidth:275,minHeight:500}} />
                        </Grid>
                        <Grid item>
                        <Grid style={{marginBottom:"2em"}} container align="right" className={classes.headingData} direction="column">
                                <Grid item>
                                <Typography className={classes.heading} variant="h4">
                                Simultaneous Platform Support
                                </Typography>
                                </Grid>
                                <Grid item>
                                <Typography variant="body1">
                                Our cutting-edge development process allows us to create apps for iPhone, Android, and tablets — all at the same time.
                                </Typography>
                                <Typography variant="body1">
                                This significantly reduces costs and creates a more unified brand experience across all devices.
                                </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container style={{marginTop:"10em",marginBottom:"10em"}} justify="center" alignItems="center" direction="row">
                        <Grid item sm>
                            <Grid container justify="center" alignItems="center" direction="column">
                                <Grid item>
                                    <Typography variant="h4">
                                        Extended Functionality
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <img src={swiss} alt="knife"></img>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sm>
                            <Grid container justify="center" alignItems="center" direction="column">
                                <Grid style={{marginBottom:"2em"}} item>
                                    <Typography variant="h4">
                                        Extended Access
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <img src={extendedAccess} alt="knife"></img>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sm>
                            <Grid container justify="center" alignItems="center" direction="column">
                                <Grid item>
                                    <Typography variant="h4">
                                        Extended Engagement
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <img src={engagement} alt="knife"></img>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container direction="column">
                <Grid item>
                    <CallToAction></CallToAction>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}


export default AppDev;