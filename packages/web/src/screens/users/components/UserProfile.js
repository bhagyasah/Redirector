import React, { Component } from 'react';

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const profileUrl = sessionStorage.getItem('USER_IMAGE');
    const name = sessionStorage.getItem('USER_NAME');
    const email = sessionStorage.getItem('USER_EMAIL');
    return (
      <div className="user-profile">
        <img alt="UserImage" src={profileUrl} width="120px" height="120px" />
        <b>Name:{' '}<i>{name}</i></b>
        <b>Email:{' '}<i>{email}</i></b>
      </div>
    );
  }
}
export default UserProfile;
