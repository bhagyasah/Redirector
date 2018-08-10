import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShowMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { message, idx } = this.props;
    return (
      <div key={idx.toString()} className="wwboard-show-list">
        <div className="wwboard-show-message" key={idx.toString()}> {message} </div>
      </div>
    );
  }
}
ShowMessage.defaultProps = {
  message: '',
  idx: null,
};

ShowMessage.propTypes = {
  message: PropTypes.string,
  idx: PropTypes.number,
};
export default ShowMessage;
