import React, { Component } from 'react';
import io from 'socket.io-client';
import { SocketProvider } from 'socket.io-react';
import socket from './../../socket';
import SideMenuBar from './components/SideMenuBar';
import UserProfile from './components/UserProfile';
import WWBoard from './components/wwboard';
import Contact from './components/contacts';
import CalLog from './components/callogs';
import Inbox from './components/inbox';

import Outbox from './components/outbox';

class MainUser extends Component {

  constructor(props) {
    super(props);
    this.state = {
      content: 0,
    };
  }

  componentWillMount() {
    const ACCESS_TOKEN = sessionStorage.getItem('ACCESS_TOKEN');
    const socket = io.connect(`http://localhost:4000/?accessToken=${ACCESS_TOKEN}`);
  }

  contentHandler = (idx) => {
    this.setState({
      content: idx,
    });
  }

render() {
  const content = [<WWBoard />, <Contact />, <CalLog />, <Inbox />, <Outbox />];
  return (
    <SocketProvider socket={socket} >
      <div className="user-container">
        <div className="user-wraper">
          <div className="user-menu">
            Redirector
          </div>
          <div className="user-body">
            <div className="user-body-sidebar">
              <UserProfile />
              <hr />
              <SideMenuBar content={idx => this.contentHandler(idx)} />
            </div>
            <div className="user-body-content">
              {content[this.state.content]}
            </div>
          </div>
          <div className="mainuser-footer" />
        </div>
      </div>
    </SocketProvider>
  );
}
}
export default MainUser;

