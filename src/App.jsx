import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import { AuthContext } from './context/authContext';
import NotFound from './components/commons/NotFound/index';
import Login from './components/Login/index';
import Signup from './components/Signup/index';
import Home from './components/Home/index';
import Profile from './components/Profile/index.jsx';
import axios from 'axios';
import { useState } from 'react';

function App() {

  const accessToken = localStorage.getItem("accessToken");
  const [authToken, setAuthToken] = useState(accessToken);
  axios.defaults.headers.common['x-access-token'] = accessToken;

  return (
    <AuthContext.Provider value={{ authToken: authToken, setAuthToken: setAuthToken }}>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <PrivateRoute path="/" exact={true} component={Home} />
            <PrivateRoute path="/profile/:userId" component={Profile} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </AuthContext.Provider >
  );
}




export default App;
