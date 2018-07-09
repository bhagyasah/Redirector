import React, { Component } from 'react';
import { FormGroup, Button, Intent } from '@blueprintjs/core';

class ManualSignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      mobileNo: undefined,
      userName: '',
      password: '',
      confirmpassword: '',
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
            placeholder="Email"
            required
            value={this.state.email}
            onChange={this.changeInputHandler('email')}
          />
          <input
            className="pt-input pt-large pt-fill"
            placeholder="Mobile Number"
            value={this.state.mobileNo}
            required
            onChange={this.changeInputHandler('mobileNo')}
          />
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
          <input
            className="pt-input pt-large pt-fill"
            type="Password"
            value={this.state.confirmpassword}
            placeholder="Confirm Password"
            onChange={this.changeInputHandler('confirmpassword')}
          />
          <br /><br />
          <Button type="submit" onClick={this.onRegister} className="pt-large" intent={Intent.PRIMARY} fill >Sign Up</Button>
        </FormGroup>
      </div>
    );
  }
}
export default ManualSignUp;
