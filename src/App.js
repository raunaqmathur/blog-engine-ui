
import React, { useState }  from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './containers/Home/Home'
import AboutUs from './containers/AboutUs/AboutUs'
import ContactUs from './containers/ContactUs/ContactUs'
import MyBlog from './containers/MyBlog/MyBlog'
import OtherBlog from './containers/OtherBlog/OtherBlog'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import HeaderLogo from './components/HeaderLogo/HeaderLogo';
import './App.css'
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import IPubPost from './components/IPubPost/IPubPost';
import IUnPubPost from './components/IUnPubPost/IUnPubPost';
import themes from './utils/theme';

import Register from './components/Register/Register';

const App = () => {

  const [theme, setTheme] = useState('');

  const handleChange = (selectedTheme) => {
    setTheme(themes[selectedTheme.value]);
  };

  const refCallback = (node) => {
    if (node) {
      theme &&
        Object.keys(theme).forEach((element) => {
          node.style.setProperty(element, theme[element], 'important');
          if (element === 'background-color' || element === 'background') {
            document.body.style.background = theme[element];
          }
        });
    }
  };

  return (
    <Router>
      <Switch>
      <div ref={refCallback} className="App">
        <Header handleChange={handleChange} />
        <HeaderLogo />

        <Route path="/" exact component={Home} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/contact-us" component={ContactUs} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/register" component={Register} />
        <Route path="/ipubpost" component={IPubPost} />
        <Route path="/iunpubpost" component={IUnPubPost} />
        <Route path="/myblog" component={MyBlog} />
        <Route path="/otherblog" component={OtherBlog} />

        <Footer />
      </div>
      </Switch>
    </Router>
  );
};

export default App