
import io from 'socket.io-client';
import { store } from './../App';

const ACCESS_TOKEN = sessionStorage.getItem('ACCESS_TOKEN');

const socket = io.connect(`http://localhost:4000/?accessToken=${ACCESS_TOKEN}`);

socket.on('initialData', (data) => {
  console.log('message from web', data);
  store.dispatch({
    type: 'SCHEMA.INSERT',
    schema: 'WWBoard',
    payload: data.wwBoardMessage,
  });
  store.dispatch({
    type: 'SCHEMA.INSERT',
    schema: 'Contact',
    payload: data.contacts,
  });

  store.dispatch({
    type: 'SCHEMA.INSERT',
    schema: 'CalLog',
    payload: data.calLogs,
  });

  store.dispatch({
    type: 'SCHEMA.INSERT',
    schema: 'Inbox',
    payload: data.inbox,
  });

  store.dispatch({
    type: 'SCHEMA.INSERT',
    schema: 'Outbox',
    payload: data.outbox,
  });
});

socket.on('wwboardmessage', (data) => {
  console.log('wwboard client message called', data);
  store.dispatch({
    type: 'SCHEMA.INSERT',
    schema: 'WWBoard',
    payload: data,
  });
});

export default socket;
