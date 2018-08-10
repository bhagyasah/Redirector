import React, { Component } from 'react';
import { Menu, MenuDivider, MenuItem } from '@blueprintjs/core';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import socket from './../../../socket';

class SideMenuBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signOut: false,
    };
  }

handleClick = (idx) => {
  return () => {
    this.props.content(idx);
  };
}

  signOut = () => {
    sessionStorage.removeItem('ACCESS_TOKEN');
    socket.disconnect();
    this.setState({
      signOut: true,
    });
  }

  render() {
    return (
      <Menu className="user-sidebar-menu">
        {this.state.signOut && <Redirect to="/" />}
        <MenuItem icon="new-text-box" onClick={this.handleClick(0)} text="WWBoard" />
        <MenuItem icon="phone" onClick={this.handleClick(1)} text="Contacts" />
        <MenuItem icon="changes" onClick={this.handleClick(2)} text="Call Logs" />
        <MenuItem icon="envelope" onClick={this.handleClick(3)} text="Inbox" />
        <MenuItem icon="inbox" onClick={this.handleClick(4)} text="Outbox" />
        <MenuItem icon="mobile-phone" onClick={this.handleClick(5)} text="Remote Control" />
        <MenuDivider />
        <MenuItem text="Settings..." icon="cog" />
        <MenuItem text="SingOut" onClick={this.signOut} icon="log-out" />
      </Menu>
    );
  }
}

SideMenuBar.propTypes = {
  content: PropTypes.func.isRequired,
};

export default SideMenuBar;

