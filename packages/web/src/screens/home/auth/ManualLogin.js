import React, { Component } from 'react';
import { FormGroup, Button, Intent } from '@blueprintjs/core';

class ManualLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
    };
  }
  onRegister = () => {
    console.log(this.state);
  }

  changeInputHandler = (field) => {
    return (e) => {
      this.setState({
        [field]: e.target.value,
      });
    };
  }

  render() {
    return (
      <div className="manaul-signup">
        <FormGroup>
          <input
            className="pt-input pt-large pt-fill"
            placeholder="User Name"
            value={this.state.userName}
            onChange={this.changeInputHandler('userName')}
          />
          <input
            className="pt-input pt-large pt-fill"
            type="password"
            value={this.state.password}
            placeholder="Password"
            onChange={this.changeInputHandler('password')}
          />
          <br /><br />
          <Button type="submit" onClick={this.onRegister} className="pt-large" intent={Intent.PRIMARY} fill >Sign Up</Button>
        </FormGroup>
      </div>
    );
  }
}
export default ManualLogin;
