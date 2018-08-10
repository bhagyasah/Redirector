import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import TiSocialFacebookCircular from 'react-icons/lib/ti/social-facebook-circular';
import { Redirect } from 'react-router-dom';
import io from 'socket.io-client';
import axios from 'axios';

class FbLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginStutus: false,
    };
  }

  responseFacebook = async (response) => {
    console.log(response);
    sessionStorage.setItem('USER_IMAGE', response.picture.data.url);
    const user = await axios({
      url: 'http://localhost:4000/auth/login',
      method: 'post',
      crossDomain: true,
      data: response,
    });
    if (user) {
      this.setState({ loginStutus: true });
      sessionStorage.setItem('USER_ID', user.data.id);
      sessionStorage.setItem('ACCESS_TOKEN', user.data.token);
      sessionStorage.setItem('USER_NAME', user.data.name);
      sessionStorage.setItem('USER_EMAIL', user.data.email);
      sessionStorage.setItem('USER_MOBILE', user.data.mobileNo);
      const ACCESS_TOKEN = sessionStorage.getItem('ACCESS_TOKEN');
      io.connect(`http://localhost:4000/?accessToken=${ACCESS_TOKEN}`);

    }
    console.log('response form server', user);
  };
  render() {
    return (
      <div>
        {this.state.loginStutus && <Redirect to="/user" />}
        <FacebookLogin
          appId="1435067666547328"
          autoLoad
          fields="name,email,picture.type(large),gender"
          callback={this.responseFacebook}
          icon={<TiSocialFacebookCircular />}
        />
      </div>
    );
  }
}

export default FbLogin;
