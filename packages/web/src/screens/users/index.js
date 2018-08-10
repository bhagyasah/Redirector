import React, { Component } from 'react';
import Home from './../home';
import MainUser from './MainUser';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log('acces token value in main', sessionStorage.getItem('ACCESS_TOKEN'));
    return (
      <div>
        {sessionStorage.getItem('ACCESS_TOKEN') !== 'undefined' ? <MainUser /> : <Home />}
      </div>
    );
  }
}
export default User;
