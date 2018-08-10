import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon, Colors } from '@blueprintjs/core';
import { REDO } from '@blueprintjs/icons/lib/esm/generated/iconContents';
import { ITALIC } from '@blueprintjs/icons/lib/esm/generated/iconNames';

class ShowContact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="main-contact">
        <div className="show-contact">
          <Icon icon="user" iconSize={40} />
          <div className="show-callog">
            <div>{this.props.name} </div>
            <div>{this.props.number} </div>
            <div style={{ fontStyle: ITALIC, color: '#0f0' }}>{`${this.props.duration} Sec`}</div>
          </div>
        </div>
        <div>
          <div style={{marginTop: '10px'}}> {this.props.dateTime}</div>
          <div style={{ color: '#f00' }}> {this.props.callType}</div>
        </div>
        <div className="show-contact-control">
          <Icon icon="phone" iconSize={20} />
          <Icon icon="chat" iconSize={20} />
          <Icon icon="geolocation" iconSize={20} />
        </div>
      </div>
    );
  }
}

ShowContact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ShowContact;