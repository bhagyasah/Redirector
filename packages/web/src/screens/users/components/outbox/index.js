import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ShowOutbox from './ShowOutbox';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props.inbox);
    const { outbox } = this.props;
    return (
      <div className="user-body-content-body">
        <div className="content-title">Outbox</div>
        <div className="user-body-content-list">
          {outbox.map(sms => <ShowOutbox content={sms.content} number={sms.contactNo} dateTime={sms.timeStamps} />)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    outbox: state.schema.Outbox,
  };
};

index.defaultProps = {
  outbox: [],
};

index.propTypes = {
  outbox: PropTypes.array,
};

export default connect(mapStateToProps)(index);
