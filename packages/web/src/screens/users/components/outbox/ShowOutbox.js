import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@blueprintjs/core';
import Moment from 'react-moment';
import { ITALIC } from '@blueprintjs/icons/lib/esm/generated/iconNames';

class ShowOutbox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="main-contact">
        <div className="show-contact">
          <Icon icon="user" iconSize={40} />
          <div className="show-contact-name">
            {this.props.number}<br />
            <Moment date={this.props.dateTime} format="YYYY-MM-DD HH:MM:SS" style={{color: "#0f0", marginTop: "5px", fontStyle: ITALIC}}/>
          </div>
        </div>
        <div style={{marginTop: "10px"}}> {this.props.content}</div>
        <div className="show-contact-control">
          <Icon icon="phone" iconSize={20} />
          <Icon icon="chat" iconSize={20} />
          <Icon icon="geolocation" iconSize={20} />
        </div>
      </div>
    );
  }
}

ShowOutbox.propTypes = {
  content: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  dateTime: PropTypes.string.isRequired,
};

export default ShowOutbox;