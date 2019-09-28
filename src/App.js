import React from 'react';
import './App.scss';
import Index from './components/Index'
import Users from './components/Users'
import Univers from './components/Univers'
import Univer from './components/Univer'
import User from './components/User'
import Companies from './components/Companies'
import Company from './components/Company'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Index} />
        <Route path="/users" exact component={Users} />
        <Route path="/users/:id" component={User} />
          <Route path="/university" exact component={Univers} />
          <Route path="/university/:id" exact component={Univer} />
          <Route path="/company" exact component={Companies} />
          <Route path="/company/:id" exact component={Company} />
      </Router>
    </div>
  );
}

export default App;
