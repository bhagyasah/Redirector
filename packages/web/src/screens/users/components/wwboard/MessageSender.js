import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { socketConnect } from 'socket.io-react';


class MessageSender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    };
  }

  changeInputHandler = (e) => {
    this.setState({
      data: e.target.value,
    });
  }

  handlekeyPress = (e) => {
    if (e.key === 'Enter') {
      const data = { message: e.target.value, date: Date.now(), userId: sessionStorage.getItem('USER_ID')};
      this.props.socket.emit('wwboardmessage', data);
      this.props.changeHandler(e.target.value);
      this.setState({
        data: '',
      });
    }
  }

  render() {
    return (
      <div className="user-body-content-wwboard-control">
        <input
          className="pt-input pt-large pt-fill"
          type="text"
          onKeyPress={this.handlekeyPress}
          value={this.state.data}
          placeholder="Write on WWBoard"
          onChange={this.changeInputHandler}
        />
      </div>
    );
  }
}

MessageSender.propTypes =  {
  socket: PropTypes.shape({
    emit: PropTypes.func.isRequired,
  }).isRequired,
  changeHandler: PropTypes.func.isRequired,
};

export default socketConnect(MessageSender);

