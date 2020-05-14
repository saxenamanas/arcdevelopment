import React from 'react';
import Lottie from 'react-lottie';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ArrowButton from './ui/ArrowButton';
import Typography from '@material-ui/core/Typography';

import animationData from './../animations/landinganimation/data';


const useStyles = makeStyles(theme=>({

}))

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
    
      return  (
        <Grid container direction="column">
          <Grid item>
            <Grid justify="flex-end" alignItems="center" direction="row" container>
              <Grid sm item>
                <Typography variant={"h2"} align="center">Bringing west coast technology <br/> to mid</Typography>
                <Grid container direction="row">
                  <Grid item>
                    <Button variant="contained">Free estimate</Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined">
                      Learn More
                      <ArrowButton height={15} width={15} fill="red"/>
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid sm item>
                <Lottie options={defaultOptions} width={"100%"} height={"100%"}/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

      )
}


export default LandingPage;