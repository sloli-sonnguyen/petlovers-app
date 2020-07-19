import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import NotFound from './components/commons/NotFound/index';
import Login from './components/Login/index';
import Signup from './components/Signup/index';
import Home from './components/Home/index';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/about" component={About} />
          <Route path="/users" component={Users} />
          <Route path="/" exact={true} component={Home} />
          <Route path="/profile" component={Profile} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}


function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function Profile() {
  return <h2>Profile</h2>;
}

export default App;
