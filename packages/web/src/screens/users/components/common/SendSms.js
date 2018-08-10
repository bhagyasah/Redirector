import React, { Component } from 'react';
import { Dialog, Intent, Button, TextArea, Label } from '@blueprintjs/core';
import { socketConnect } from 'socket.io-react';
import PropTypes from 'prop-types';

class SendSms extends Component {
  constructor(props) {
    super(props);
    const { mobileNo } = props;
    this.state = {
      isOpen: true,
      messageValue: '',
      mobileNo,
    };
  }

  closeHandler = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  changeInputHandler = (field) => {
    return (e) => {
      this.setState({
        [field]: e.target.value,
      });
    };
  }

  sendMessageHandler = () => {
    const data = {
      message: this.state.messageValue,
      userId: sessionStorage.getItem('USER_ID'),
      mobileNo: this.state.mobileNo,
    };
    this.props.socket.emit('sendMessage', data);
  }

  render() {
    return (
      <Dialog
        style={{ width: '400px' }}
        usePortal
        icon="envelope"
        isCloseButtonShown
        transitionDuration={1000}
        lazy={false}
        canEscapeKeyClose
        isOpen={this.state.isOpen}
        onClose={this.closeHandler}
        title="Send Message"
      >
        <div className="pt-dialog-body">
          <div style={{ display: 'flex' }}>
            <Label text="Mobile No." />
            <input
              className="pt-input"
              placeholder="Mobile No....."
              value={this.state.mobileNo}
              onChange={this.changeInputHandler('mobileNo')}
            />
          </div>
          <div style={{ display: 'flex' }}>
            <Label text="Message" style={{ marginRight: '10px' }} />
            <TextArea
              style={{ height: '100px' }}
              large
              intent={Intent.PRIMARY}
              onChange={this.changeInputHandler('messageValue')}
              value={this.state.messageValue}
            />
          </div>
        </div>
        <div className="pt-dialog-footer">
          <div className="pt-dialog-footer-actions">
            <Button
              style={{ marginRight: '50px', marginTop: '-10px' }}
              text="Send"
              icon="direction-right"
              intent={Intent.PRIMARY}
              onClick={this.sendMessageHandler}
            />
          </div>
        </div>
      </Dialog>
    );
  }
}

SendSms.propTypes = {
  mobileNo: PropTypes.string.isRequired,
  socket: PropTypes.shape({
    emit: PropTypes.func,
  }).isRequired,
};
export default socketConnect(SendSms);

