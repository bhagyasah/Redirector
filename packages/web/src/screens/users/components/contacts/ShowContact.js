import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@blueprintjs/core';
import { socketConnect } from 'socket.io-react';
import SendSms from './../common/SendSms';
import Map from './../googlemap/Map';

class ShowContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sendSms: false,
      showMap: false,
    };
  }

callHandler = () => {
  const payload = { contactNo: this.props.number, userId: sessionStorage.getItem('USER_ID')}
  this.props.socket.emit('call', payload);
}

sendMessageHandler = () => {
  this.setState({
    sendSms: !this.state.sendSms,
  });
}

trackFriendHandler = () => {
  this.setState({
    showMap: !this.state.showMap,
  });
}

render() {
  return (
    <div className="main-contact">
      { this.state.sendSms && <SendSms mobileNo={this.props.number} />}
      {this.state.showMap && <Map isOpen={this.state.showMap} />}
      <div className="show-contact">
        <Icon icon="user" iconSize={40} />
        <div className="show-contact-name">
          {this.props.name}<br />{this.props.number}
        </div>
      </div>
      <div className="show-contact-control">
        <Icon icon="phone" iconSize={20} onClick={this.callHandler} />
        <Icon icon="chat" iconSize={20} onClick={this.sendMessageHandler} />
        <Icon icon="geolocation" iconSize={20} onClick={this.trackFriendHandler} />
      </div>

    </div>
  );
}
}

ShowContact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default socketConnect(ShowContact);