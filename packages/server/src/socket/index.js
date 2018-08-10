import socketIO from 'socket.io';
import validateToken from '../auth/validateToken';
import addWWBoardMessage from './../api/addWWBoardMessage';
import findWWBoardMessage from './../api/findWWBoard';
import addContact from './../api/addContact';
import addCalLog from './../api/addCallLogs';
import addInbox from './../api/addInbox';
import addOutbox from './../api/addOutbox';
import findContact from './../api/findConatact';
import findInbox from './../api/findInbox';
import findOutbox from './../api/findOutbox';
import findCalLogs from './../api/findCalLogs';

const activeUsers = [];
const socketHandler = (server) => {
  const io = socketIO(server);

  io.use((socket, next) => {
    console.log('try to socket connect at', socket.id);
    if (validateToken(socket.handshake.query.accessToken)) {
      next();
    } else {
      next(new Error('Authentication error'));
    }
  }).on('connection', async (socket) => {

    const user = validateToken(socket.handshake.query.accessToken);
    activeUsers.push({ id: user.id, regToken: user.regToken, mobileNo: user.mobileNo, socketId: socket.id });
    console.log('current active users', activeUsers);
    const wwBoardMessage = await findWWBoardMessage({ userId: user.id });
    const contacts = await findContact({ userId: user.id });
    const inbox = await findInbox({ userId: user.id });
    const outbox = await findOutbox({ userId: user.id });
    const calLogs = await findCalLogs({ userId: user.id });
    const initailData = {
      wwBoardMessage, contacts, inbox, outbox, calLogs,
    };

    // console.log('board return message', initailData);

    socket.emit('initialData', initailData);
    console.log(user.name, 'is connected at socket id=', socket.id);
    socket.on('wwboardmessage', async (data) => {
      const id = await addWWBoardMessage(data);
      const newData = { ...data, id };
      console.log('id of inserted message', newData);
      activeUsers.filter(sockUser => data.userId === sockUser.id).forEach((userSocks) => {
        io.to(userSocks.socketId).emit('wwboardmessage', newData);
      });
    });

    socket.on('call', (data) => {
      console.log('calling number data', data);
      activeUsers.filter(sockUser => data.userId === sockUser.id).forEach((userSocks) => {
        io.to(userSocks.socketId).emit('call', { ...data, regToken: user.regToken });
      });
    });

    socket.on('sendMessage', (data) => {
      console.log('calling number data', data);
      activeUsers.filter(sockUser => data.userId === sockUser.id).forEach((userSocket) => {
        io.to(userSocket.socketId).emit('sendMessage', { ...data, regToken: user.regToken });
      });
    });

    socket.on('uploadContact', (contact) => {
      addContact(contact);
      // console.log(contact);
    });

    socket.on('uploadCallLogs', (callog) => {
      addCalLog(callog);
      // console.log('up loadcall history', callog);
    });

    socket.on('uploadInbox', (inboxdata) => {
      addInbox(inboxdata);
      // console.log('inbox listner is called', inbox);
    });

    socket.on('uploadOutbox', (outboxdata) => {
      addOutbox(outboxdata);
      // console.log('outbox add0', outbox);
    });

    socket.on('disconnect', () => {
      console.log(user.name, 'is disconnected');
      activeUsers.splice(activeUsers.findIndex(currentUser => currentUser.userId === user.id), 1);
      console.log('active user after disconnect', user.name, activeUsers);
    });

    socket.on('sendLocationRequest', (data) => {
      console.log('sendLoactionRequest', data);

      activeUsers.filter(activeUser => activeUser.mobileNo.includes(data.mobileNo)).forEach((userSocket) => {
        io.to(userSocket.socketId).emit('locationRequest', { ...data, userName: user.name });
      });
    });
  });
};

export default socketHandler;
