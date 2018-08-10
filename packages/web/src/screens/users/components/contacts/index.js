import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ShowContact from './ShowContact';
import Map from './../googlemap/Map';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props.Contact);
    const contacts = this.props.Contact;
    return (
      <div className="user-body-content-body">
        <div className="content-title">Contacts</div>
        <div className="user-body-content-list">
          {contacts.map(contact =>  <ShowContact name={contact.contactName} number={contact.contactNo} />)}
        </div>
        <Map />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    Contact: state.schema.Contact,
  };
};
index.defaultProps = {
  Contact: [],
};

index.propTypes = {
  Contact: PropTypes.array,
}

export default connect(mapStateToProps)(index);
