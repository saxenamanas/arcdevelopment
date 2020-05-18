import React from 'react';
import Grid from '@material-ui/core/Grid';
import {makeStyles,useTheme} from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ArrowButton from './ui/ArrowButton';


import customSoftware from '../assets/Custom Software Icon.svg';
import mobileAppsIcon from '../assets/mobileIcon.svg'
import websiteIcon from '../assets/websiteIcon.svg';

const useStyles = makeStyles(theme=>({
    serviceBlock:{
        marginTop:"6em"
      },
      subtitle:{
        marginBottom:"1em"
      },
      specialText:{
        fontFamily: "Pacifico",
        color: theme.palette.common.orange
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
      icon:{
        marginLeft:"2em",
        [theme.breakpoints.down("xs")]:{
          marginLeft:0,
        }
      },

}));

const Services = ()=>{
    const theme = useTheme();
    const classes = useStyles();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    return(
        <Grid container direction="column">
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
              <Grid style={{marginBottom:"4em"}} item>
                <img className={classes.icon} alt="custom" src={websiteIcon}/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
    )
}

export default Services;