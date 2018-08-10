import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ShowInbox from './ShowInbox';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props.inbox);
    const { inbox } = this.props;
    return (
      <div className="user-body-content-body">
        <div className="content-title">Inbox</div>
        <div className="user-body-content-list">
          {inbox.map(sms => <ShowInbox content={sms.content} number={sms.contactNo} dateTime={sms.timeStamps} />)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    inbox: state.schema.Inbox,
  };
};

index.defaultProps = {
  inbox: [],
};

index.propTypes = {
  inbox: PropTypes.array,
};

export default connect(mapStateToProps)(index);
