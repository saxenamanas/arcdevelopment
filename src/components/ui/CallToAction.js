import React from 'react';
import Typography from '@material-ui/core/Typography';
import {makeStyles,useTheme} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ArrowButton from './ArrowButton';
import useMediaQuery from '@material-ui/core/useMediaQuery';


import background from '../../assets/background.jpg';


const useStyles = makeStyles(theme=>({
    subtitle:{
        color:"white"
    },
    mainBlock:{
            backgroundImage: `url(${background})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "60em",
            width: "100%",
            backgroundAttachment: "fixed"
          
    },
    learnMoreButton:{
        ...theme.typography.learnButton,
        fontSize: '0.9rem',
        height: 45,
        width: 145,
        marginTop: "1em",
        marginBottom:"1em"
      },
      button:{
        ...theme.typography.estimate,
        borderRadius : '50px',
        marginLeft: '2em',
        marginRight : '8em',
        fontSize : '1.2rem',
        [theme.breakpoints.down("sm")]:{
            textAlign:"center",
            marginTop: "auto",
            marginRight: "auto",
        }
      },
      wrapper:{
          [theme.breakpoints.down("sm")]:{
              textAlign:"center",
              marginBottom: 0,
          }
      }
}));

const CallToAction = ()=>{
    
const theme = useTheme();
    const classes = useStyles();
    const match = useMediaQuery(theme.breakpoints.down("sm"));
    return(
        <Grid container className={classes.mainBlock} direction="row" alignItems="center" justify={match?"center":"space-between"}>
            <Grid style={{marginLeft:"4em"}} item>
                <Grid className={classes.wrapper} container direction="column">
                    <Grid item>
                        <Typography variant="h2">
                            Simple Software<br/> Revolutionary Results.
                        </Typography>
                        <Typography variant="subtitle2" className={classes.subtitle}>
                            Take advantage of the 21st century.
                        </Typography>
                    </Grid>
                    <Grid item>
                    <Button className={classes.learnMoreButton} variant="outlined">
                     <span style={{marginRight:10}}>Learn More</span>
                      <ArrowButton height={15} width={15} fill={theme.palette.common.blue}/>
                    </Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
            <Button variant="contained" color="secondary" className={classes.button}>
                  Free Estimate
                </Button>
            </Grid>
        </Grid>
    )
}

export default CallToAction;