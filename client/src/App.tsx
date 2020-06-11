import React, { Fragment, useState} from "react";
import "./App.css";
import { CookiesProvider } from "react-cookie";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/Login.js'

// import AppHeader from "./AppHeader";
import LandingPage from "./components/LandingPage";
import LoginCallback from "./components/LoginCallback";

import Alert from "react-s-alert";

import "react-s-alert/dist/s-alert-default.css";
import "react-s-alert/dist/s-alert-css-effects/slide.css";

const App: React.FC = () => {
  return (
    <Router>
      <div style={{
      justifyContent: "center",
      alignItems: "center"
    }}
    >
      <Route exact path="/">
        <h1 text-align='center'> Welcome to BreadBasket </h1>
      </Route>
      <Route exact path = '/login'>
        <h1 text-align='center'> Login </h1>
        <div className="App">
          <div className="container d-flex align-items-center flex-column">
            <Switch>
              <LoginForm />
            </Switch>
          </div>
        </div>
      </Route>
    </div>
    <Route exact path = '/register'>
      <h1 text-align='center'> Register </h1>
      <div className='App'>
        <div className="container d-flex align-items-center flex-column">
              <Switch>
                <RegistrationForm />
              </Switch>
        </div>
      </div>
    </Route>
  </Router>
  );
};

export default App;
