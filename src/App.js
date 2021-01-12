
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './containers/Home/Home'
import AboutUs from './containers/AboutUs/AboutUs'
import ContactUs from './containers/ContactUs/ContactUs'
import Header from './components/Header/Header'
import HeaderLogo from './components/HeaderLogo/HeaderLogo';
import './App.css'
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import IPubPost from './components/IPubPost/IPubPost';


import Register from './components/Register/Register';

const App = () => {
  return (
    <Router>
      <Switch>
      <div className="App">
        <Header />
        <HeaderLogo />
        {/* <Home /> */}
        <Route path="/" exact component={Home} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/contact-us" component={ContactUs} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/register" component={Register} />
        <Route path="/ipubpost" component={IPubPost} />
      </div>
      </Switch>
    </Router>
  );
};

export default App