import React,{useState, useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar } from '@material-ui/core';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import {makeStyles} from '@material-ui/styles';
// import theme from './Theme';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {useTheme} from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


import logo from '../../assets/logo.svg'


function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

  const useStyles = makeStyles(theme =>({
    toolbarMargin : {
      ...theme.mixins.toolbar,
      marginBottom: "3em",
      [theme.breakpoints.down("md")]:{
        marginBottom: "2em"
      },
      [theme.breakpoints.down("xs")]:{
        marginBottom: "1.25em"
      }
    },
    logo:{
      height: "8em",
      [theme.breakpoints.down("md")]:{
        height: "7em"
      },
      [theme.breakpoints.down("xs")]:{
        height: "5.5em"
      }
    },
    logoButton:{
      padding: 0,
      "&:hover":{
        backgroundColor: "transparent",
      }
    },
    selectedDrawer:{
      ...theme.typography.tab,
      color: "white",
      opacity:1,
    },
    tabContainer:{
      marginLeft: "auto",
    },
    drawerEstimate:{
      backgroundColor: theme.palette.common.orange,
      "&:hover":{
        backgroundColor: theme.palette.common.orange
      }
    },
    drawerBack:{
      backgroundColor: theme.palette.common.blue,
    },
    tab:{
      ...theme.typography.tab,
      minWidth : 10,
      marginLeft : '25px'
    },
    button:{
      ...theme.typography.estimate,
      borderRadius : '50px',
      marginLeft: '50px',
      marginRight : '25px',
    },
    menu:{
      backgroundColor: theme.palette.common.blue,
      borderRadius: "0px"
    },
    drawerContainer:{
      marginLeft:"auto",
    },
    drawerIcon:{
      width: "50px",
      height: "50px",
    },
    menuItem:{
      color: "white",
      ...theme.typography.tab,
      opacity: 0.7,
      "&:hover":{
        opacity: 1,
      }
    },
    drawerText:{
      ...theme.typography.tab,
      color: "white",
      opacity: 0.7,
    },
    appBar:{
      // zIndex: theme.zIndex.modal + 1
    }
  }))


export default function Header (props){
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const theme = useTheme();
  const classes = useStyles();

  const [openDrawer,setOpenDrawer] = useState(false);
  const [value,setValue] = useState(0);
  const [anchorEl,setAnchorEl] = useState(null);
  const [open,setOpen] = useState(false);
  const [selectedIndex,setSelectedIndex]=useState(0);
  const matches = useMediaQuery(theme.breakpoints.down("md"));


  const options = [
    {name:"Services",link:"/services"},
    {name:"Website Development",link:"/websitedev"},
    {name:"Mobile App Development",link:"/mobileapps"},
    {name:"Custom Software Development",link:"/customsoftware"}

]

  const handleMenuItemClick = (e,i)=>{
    setAnchorEl(null);
    setOpen(false);
    setSelectedIndex(i);
  }

  const handleChange = (e,value)=>{
    setValue(value);
  }

  const handleClick = (e)=>{
    setAnchorEl(e.currentTarget);
    setOpen(true);
  }

  const handleClose = (e)=>{
    setAnchorEl(null);
    setOpen(false);
  }

  const tabs = (
    <React.Fragment>
      <Tabs
                 value={value}
                 onChange={handleChange} 
                 className={classes.tabContainer}
                 indicatorColor="primary"
                 >
                  <Tab className={classes.tab} component={Link} to="/" label="Home"/>
                  <Tab className={classes.tab} 
                  aria-owns={anchorEl?"simple-menu":null} 
                  aria-haspopup={anchorEl?"true":undefined} 
                  onMouseOver={(event)=>{handleClick(event)}}
                  component={Link} 
                  to="/services"  
                  label="Services"
                   />
                  <Tab className={classes.tab} component={Link} to="/revolution"  label="The Revolution" />
                  <Tab className={classes.tab} component={Link} to="/aboutus"  label="About Us"/>
                  <Tab className={classes.tab} component={Link} to="/contactus"  label="Contact Us"/>
                </Tabs>
                <Button variant="contained" color="secondary" className={classes.button}>
                  Free Estimate
                </Button>
                <Menu 
                id="simple-menu"
                 anchorEl={anchorEl} 
                 open={open}
                onClose={handleClose}
                MenuListProps={{onMouseLeave:handleClose}}
                classes={{paper: classes.menu}}
                elevation={0}
                  >
                    {options.map((option,index)=>(
                      <MenuItem classes={{root:classes.menuItem}} key={option} onClick={(event)=>{handleClose();setValue(1);handleMenuItemClick(event,index)}} selected={index===selectedIndex && value===1} component={Link} to={option.link}>{option.name}</MenuItem>
                    ))}
          
                </Menu>
    </React.Fragment>
  )

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer classes={{paper:classes.drawerBack}} disableBackdropTransition={!iOS} disableDiscovery={iOS} open={openDrawer} onClose={()=>{setOpenDrawer(false)}} onOpen={()=>{setOpenDrawer(true)}}>
      <div className={classes.toolbarMargin}/>
        <List disablePadding>
          <ListItem selected={value===0} onClick={()=>{setOpenDrawer(false);setValue(0);}} divider button component={Link} to="/">
            <ListItemText className={value===0?classes.selectedDrawer:classes.drawerText}  disableTypography>Home</ListItemText>
          </ListItem>
          <ListItem selected={value===1} onClick={()=>{setOpenDrawer(false);setValue(1)}} divider button component={Link} to="/services">
            <ListItemText className={value===1?classes.selectedDrawer:classes.drawerText}  disableTypography>Services</ListItemText>
          </ListItem>
          <ListItem selected={value===2} onClick={()=>{setOpenDrawer(false);setValue(2)}} divider button component={Link} to="/revolution">
            <ListItemText className={value===2?classes.selectedDrawer:classes.drawerText}  disableTypography>The Revolution</ListItemText>
          </ListItem>
          <ListItem selected={value===3} onClick={()=>{setOpenDrawer(false);setValue(3)}} divider button component={Link} to="/aboutus">
            <ListItemText className={value===3?classes.selectedDrawer:classes.drawerText} disableTypography>About Us</ListItemText>
          </ListItem>
          <ListItem selected={value===4} onClick={()=>{setOpenDrawer(false);setValue(4)}} divider button component={Link} to="/contactus">
            <ListItemText className={value===4?classes.selectedDrawer:classes.drawerText} disableTypography>Contact Us</ListItemText>
          </ListItem>
          <ListItem selected={value===5} className={classes.drawerEstimate} onClick={()=>{setOpenDrawer(false);setValue(5)}} divider button component={Link} to="estimate/">
            <ListItemText className={value===3?classes.selectedDrawer:classes.drawerText}  disableTypography>Free Estimate</ListItemText>
          </ListItem>
        </List>
        </SwipeableDrawer>
      <IconButton className={classes.drawerContainer} onClick={()=>{setOpenDrawer(!openDrawer)}}>
        <MenuIcon className={classes.drawerIcon}/>
      </IconButton>
    </React.Fragment>
  )


  useEffect(()=>{
    if(window.location.pathname==='/' && value!==0){
      setValue(0);
    } else
    if(window.location.pathname==='/services' && value!==1){
      setValue(1);
    } else
    if(window.location.pathname==='/revolution' && value!==2){
      setValue(2);
    } else
    if(window.location.pathname==='/aboutus' && value!==3){
      setValue(3);
    } else
    if(window.location.pathname==='/contactus' && value!==4){
      setValue(4);
    }else
    if(window.location.pathname==='/services' && value!==1){
      setValue(1);
      setSelectedIndex(1);
    }else
    if(window.location.pathname==='/websitedev' && value!==1){
      setValue(1);
      setSelectedIndex(2);
    }else
    if(window.location.pathname==='/mobileapps' && value!==1){
      setValue(1);
      setSelectedIndex(3);
    }else
    if(window.location.pathname==='/customsoftware' && value!==1){
      setValue(1);
      setSelectedIndex(4);
    }
  },[value]);

    return(
      <React.Fragment>
        <ElevationScroll>
            <AppBar position="fixed" color="primary" className={classes.appBar}>
            <Toolbar disableGutters>
              <Button className={classes.logoButton} disableRipple component={Link} to="/" onClick={()=>{setValue(0)}}>
              <img src={logo} alt="logo" className={classes.logo}/>
              </Button>
                {matches?drawer:tabs}
            </Toolbar>
        </AppBar>
        </ElevationScroll>
        <div className={classes.toolbarMargin}/>
      </React.Fragment>
        
    )
}
