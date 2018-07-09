import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import TiSocialFacebookCircular from 'react-icons/lib/ti/social-facebook-circular';
import axios from 'axios';

class FbLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  responseFacebook = async (response) => {
    console.log(response);
    const id = await axios.get(`http://localhost:4000/auth/registration?userName=${response.name}`);
    console.log('response form server', id);
  };
  render() {
    return (
      <FacebookLogin
        appId="1435067666547328"
        autoLoad
        fields="name,email,picture,gender"
        callback={this.responseFacebook}
        icon={<TiSocialFacebookCircular />}
      />
    );
  }
}

export default FbLogin;
