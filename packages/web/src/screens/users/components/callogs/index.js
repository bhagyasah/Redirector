import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ShowCallog from './ShowCallog';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props.CalLog);
    const calLogs = this.props.CalLog;
    return (
      <div className="user-body-content-body">
        <div className="content-title">Call History</div>
        <div className="user-body-content-list">
          {calLogs.map(log => <ShowCallog name={log.contactName} number={log.contactNo} duration={log.callDuration} dateTime={log.dateTime} callType={log.callType} />)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    CalLog: state.schema.CalLog,
  };
};
index.defaultProps = {
  CalLog: [],
};

index.propTypes = {
  CalLog: PropTypes.array,
}

export default connect(mapStateToProps)(index);
