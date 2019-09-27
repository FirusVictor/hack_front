import React from 'react';
import './App.scss';
import Index from './components/Index'
import Users from './components/Users'
import User from './components/User'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Index} />
        <Route path="/users" exact component={Users} />
        <Route path="/users/:id" component={User} />
      </Router>
    </div>
  );
}

export default App;
