import React from 'react';
import Header from './ui/Header';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import theme from './ui/Theme';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Footer from './ui/Footer';
import LandingPage from './LandingPage';
import Services from './Services';
import CustomSoftware from './CustomSoftware';
import AppDev from './iOSAndAndroid';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path="/" component={()=>{return <LandingPage></LandingPage>}} />
          <Route exact path="/services" component={()=>{return <Services/>}} />
          <Route exact path="/revolution" component={()=>{return <div>Revolution</div>}} />
          <Route exact path="/customsoftware" component={()=>{return <CustomSoftware></CustomSoftware>}} />
          <Route exact path="/websitedev" component={()=>{return <div>Website Dev</div>}} />
          <Route exact path="/mobileapps" component={()=>{return <AppDev/>}} />
          <Route exact path="/aboutus" component={()=>{return <div>About us</div>}} />
          <Route exact path="/contactus" component={()=>{return <div>contact</div>}} />
          <Route exact path="/estimate" component={()=>{return <div>estimate</div>}} />
        </Switch>
        <Footer/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
