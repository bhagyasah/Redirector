import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './home';
import User from './users';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/user" component={User} />
        </div>
      </Router>
    );
  }
}
export default index;
