import React, { Component } from 'react';
import { Card, Elevation } from '@blueprintjs/core';
import FacebookLogin from './auth/FbLogin';
import ManualSignUp from './auth/ManualSignUp';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { fblogin: false };
  }
  render() {
    return (
      <div className="login-main">
        <div className="login-facebook">
          <Card interactive elevation={Elevation.TWO}>
            <h2>Redirector</h2>
            <p> Sign up to watch and remote acces your phone</p>
            <hr />
            <FacebookLogin loginStatus={this.state.fblogin} />
            <h3> <span className="line-center"> OR</span></h3>
            <ManualSignUp />
          </Card>
        </div>
      </div>
    );
  }
}
export default Login;
