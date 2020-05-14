import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import adorn from '../../assets/Footer Adornment.svg';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';

const useStyles = makeStyles(theme=>(
    {
        footer:{
            backgroundColor: theme.palette.common.blue,
            width: "100%",
            zIndex: 1302,
            position: "relative",
        },
        footerImage:{
            width: "25em",
            verticalAlign: "bottom",
            [theme.breakpoints.down("md")]:{
                width: "21em",
            },
            [theme.breakpoints.down("xs")]:{
                width: "15em",
            }
        },
        mainContainer : {
            position: "absolute",
        },
        footerText:{
            fontSize: "0.75em",
            fontFamily: "Arial",
            color: "white",
            fontWeight: "Bold",
            textDecoration: "none"
        },
        gridItem:{
            margin: "3em"
        }
    }
))

const Footer = ()=>{

    const classes = useStyles();

    return(

        <footer className={classes.footer}>
            <Grid container 
            direction="row"
            justify="center"
            className={classes.mainContainer}>
            
            <Grid item className={classes.gridItem}>
                <Grid container item direction="column" spacing={2}>
                    <Grid item className={classes.footerText} component={Link} to="/">
                        Home
                    </Grid>
                </Grid>
            </Grid>
            <Grid item className={classes.gridItem}>
                <Grid container item direction="column" spacing={2}>
                    <Grid item className={classes.footerText} component={Link} to="/services">
                        Services
                    </Grid>
                    <Grid item className={classes.footerText} component={Link} to="/services">
                        Custom Software
                    </Grid>
                    <Grid item className={classes.footerText} component={Link} to="/services">
                        Mobile App Development
                    </Grid>
                    <Grid item className={classes.footerText} component={Link} to="/services">
                        Website Development
                    </Grid>
                </Grid>
            </Grid>
            <Grid item className={classes.gridItem}>
                <Grid container direction="column" spacing={2}>
                    <Grid item className={classes.footerText} component={Link} to="/revolution">
                        The Revolution
                    </Grid>
                    <Grid item className={classes.footerText} component={Link} to="/revolution">
                        Vision
                    </Grid>
                    <Grid item className={classes.footerText} component={Link} to="/revolution">
                        Technology
                    </Grid>
                    <Grid item className={classes.footerText} component={Link} to="/revolution">
                        Process
                    </Grid>
                </Grid>
            </Grid>
            <Grid item className={classes.gridItem}>
                <Grid container direction="column" spacing={2}>
                    <Grid item className={classes.footerText} component={Link} to="/aboutus">
                        About Us
                    </Grid>
                    <Grid item className={classes.footerText} component={Link} to="/aboutus">
                        History
                    </Grid>
                    <Grid item className={classes.footerText} component={Link} to="/aboutus">
                        Team
                    </Grid>
                </Grid>
            </Grid>
            <Grid item className={classes.gridItem}>
                <Grid container direction="column" spacing={2}>
                    <Grid item className={classes.footerText} component={Link} to="/contactus">
                        Contact Us
                    </Grid>
                </Grid>
            </Grid>
            </Grid>
            <img className={classes.footerImage} alt="footer" src={adorn}>
                
            </img>
        </footer>
    )
}

export default Footer;