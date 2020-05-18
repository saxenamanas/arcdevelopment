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
import bulb from '../assets/bulb.svg';
import watch from '../assets/stopwatch.svg';
import money from '../assets/cash.svg';
import documentAnimation from '../animations/documentsAnimation/data';
import scaleAnimation from '../animations/scaleAnimation/data.json';
import root from '../assets/root.svg'
import automation from '../animations/automationAnimation/data.json';
import ux from '../animations/uxAnimation/data';

const useStyles = makeStyles(theme=>({
    description:{
        maxWidth:"40em",
        [theme.breakpoints.down("sm")]:{
            align:"center"
        },
    },
    arrow:{
        marginTop: "0.5em"
    },
    mainContainer:{
        paddingLeft: "4em",
        paddingTop: "2em",
        paddingRight: "2em",
        paddingBottom: "4em"
    },
    saveThings:{
        height:"40em",

    },
    heading:{
        fontWeight: 700,
        fontSize:"1.75rem",
    },
    headingData:{
        maxWidth: "20em"
    },
    root:{
        height:"55em"
    },
    rootImage:{
        width:"25em",
        height:"25em",
    }
}))

const CustomSoftware = ()=>{
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("sm"));
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: documentAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

    const scaleOptions = {
        loop: true,
        autoplay: true, 
        animationData: scaleAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    }

    const automationOptions = {
        loop: true,
        autoplay: true, 
        animationData: automation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    }
    const uxOptions = {
        loop: true,
        autoplay: true, 
        animationData: ux,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    }

    return(
        <React.Fragment>
        <Grid container className={classes.mainContainer} direction="column">
            <Grid item>
                <Grid container direction="row">
                    <Grid style={{marginLeft:"-3.5em"}} className={classes.arrow} item>
                        <IconButton>
                            <img src={backwardIcon} alt="forward"></img>
                        </IconButton>
                    </Grid>
                    <Grid style={{marginLeft:"1em",marginRight:"1em",align:matches?"center":"undefined"}} item>
                        <Typography variant="h2">
                            Custom Software Development
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
                Whether we’re replacing old software or inventing new solutions, Arc Development is here to help your business tackle technology.
                </Typography>
                <Typography variant="body1">
                Using regular commercial software leaves you with a lot of stuff you don’t need, without some of the stuff you do need, and ultimately controls the way you work. Without using any software at all you risk falling behind competitors and missing out on huge savings from increased efficiency.
                </Typography>
                <Typography variant="body1">
                Our custom solutions are designed from the ground up with your needs, wants, and goals at the core. This collaborative process produces finely tuned software that is much more effective at improving your workflow and reducing costs than generalized options.
                </Typography>
                <Typography variant="body1">
                We create exactly what you what, exactly how you want it.
                </Typography>
            </Grid>
            {/* 3 images of Save */}
            <Grid item>
                <Grid container className={classes.saveThings} justify="space-around" alignItems="center" direction="row">
                    <Grid item>
                        <Grid container justify="center" alignItems="center" direction="column">
                            <Grid item>
                                <Typography variant="h5">
                                    Save Energy.
                                </Typography>
                            </Grid>
                            <Grid item>
                                <img src={bulb} alt="bulb"></img>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container style={{width:"30em"}} justify="center" alignItems="center" direction="column">
                            <Grid item>
                                <Typography variant="h5">
                                    Save Time.
                                </Typography>
                            </Grid>
                            <Grid item>
                                <img src={watch} alt="bulb"></img>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container justify="center" alignItems="center" direction="column">
                            <Grid item>
                                <Typography variant="h5">
                                    Save Energy.
                                </Typography>
                            </Grid>
                            <Grid item>
                                <img src={money} alt="bulb"></img>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid container direction="row" justify="space-around" md>
                    <Grid item md>
                        <Grid container className={classes.headingData} direction="column">
                            <Grid item>
                                <Typography className={classes.heading} variant="h4">
                                    Digital Documents & Data
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body1">
                                Reduce Errors. Reduce Waste. Reduce Costs.<br/>
                                </Typography>
                                <Typography variant="body1">
                                Billions are spent annually on the purchasing, printing, and distribution of paper. On top of the massive environmental impact this has, it causes harm to your bottom line as well.
                                <br/>
                                </Typography>
                                <Typography variant="body1">
                                By utilizing digital forms and documents you can remove these obsolete expenses, accelerate your communication, and help the Earth.
                                <br/>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md>
                    <Lottie options={defaultOptions} style={{maxHeight:275,maxWidth:275,minHeight:250}} />
                    </Grid>
                    <Grid item md>
                    <Lottie options={scaleOptions} style={{maxHeight:260,maxWidth:280}} />
                    </Grid>
                    <Grid item md>
                    <Grid container className={classes.headingData} align={matches?"center":"right"} direction="column">
                            <Grid item>
                                <Typography className={classes.heading} variant="h4">
                                    Scale
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body1">
                                Whether you’re a large brand, just getting started, or taking off right now, our application architecture ensures pain-free growth and reliability.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid container className={classes.root} direction="row" justify="center" alignItems="center">
                    <Grid item>
                        <Grid style={{textAlign:"center"}} container direction="column">
                            <Grid item>
                                <img className={classes.rootImage} src={root} alt="root"></img>
                            </Grid>
                            <Grid style={{maxWidth:"35em"}} item>
                                <Typography className={classes.heading} variant="h4">
                                    Root Cause Analysis
                                </Typography>
                            </Grid>
                            <Grid style={{maxWidth:"35em"}} item>
                                <Typography variant="body1">
                                Many problems are merely symptoms of larger, underlying issues.<br/>
                                We can help you thoroughly examine all areas of your business to develop a holistic plan for the most effective implementation of technology.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid container direction="row" justify="space-around" md>
                    <Grid item md>
                        <Grid container className={classes.headingData} direction="column">
                            <Grid item>
                                <Typography className={classes.heading} variant="h4">
                                    Automation
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body1">
                                Why waste time when you don’t have to.
                                </Typography>
                                <Typography variant="body1">
                                We can help you identify processes with time or event based actions which can now easily be automated.<br/>
                                </Typography>
                                <Typography variant="body1">
                                Increasing efficiency increases profits, leaving you more time to focus on your business, not busywork.<br/>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md>
                    <Lottie options={automationOptions} style={{maxHeight:275,maxWidth:275,minHeight:250}} />
                    </Grid>
                    <Grid item md>
                    <Lottie options={uxOptions} style={{maxHeight:310,maxWidth:155}} />
                    </Grid>
                    <Grid item md>
                    <Grid container className={classes.headingData} align={matches?"center":"right"} direction="column">
                            <Grid item>
                                <Typography className={classes.heading} variant="h4">
                                User Experience DesignScale
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body1">
                                A good design that isn’t usable isn’t a good design.
                                <br/>
                                </Typography>
                                <Typography variant="body1">
                                So why are so many pieces of software complicated, confusing, and frustrating?
                                <br/>
                                </Typography>
                                <Typography variant="body1">
                                By prioritizing users and the real ways they interact with technology we’re able to develop unique, personable experiences that solve problems rather than create new ones.
                                <br/>
                                </Typography>
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

export default CustomSoftware;