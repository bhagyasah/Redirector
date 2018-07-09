import React, { Component } from 'react';
import Login from './login';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="home-page">
        <div className="home-login">
          <Login />
        </div>
      </div>
    );
  }
}
export default index;
