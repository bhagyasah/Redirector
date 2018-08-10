// import addUser from './../src/api/addUser';
// import addContact from './../src/api/addContact';
// import addSms from './../src/api/addSms';
// import addGpsLocation from '../src/api/addGpsLocation';
// import addCallLog from '../src/api/addCallLogs';

// describe('all insertion test', async () => {
//   it('add user', async () => {
//     const userId = await addUser({
//       userName: 'bhagya', email: 'bhagyasah@gmail.com', gender: 'male', regToken: '1234',
//     });
//     expect(Number.isInteger(userId)).toBeTruthy();
//   });

//   it('add contact', async () => {
//     const contactId = await addContact({ contactNo: 987874855, contactName: 'bhagya', userId: 1 });
//     expect(Number.isInteger(contactId)).toBeTruthy();
//   });

//   it('add sms', async () => {
//     const smsId = await addSms({
//       contactNo: 9020089, content: 'hlw msg', timeStamps: 45553045935, userId: 1,
//     });
//     expect(Number.isInteger(smsId)).toBeTruthy();
//   });

//   it('add gps location', async () => {
//     const gpsId = await addGpsLocation({
//       timeStamps: 25950808, userId: 1, latitude: 5457495739, longitude: 94589304930,
//     });
//     expect(Number.isInteger(gpsId)).toBeTruthy();
//   });

//   it('add calLogs', async () => {
//     const callogId = await addCallLog({
//       contactName: 'bhagya', contactNo: 98393839, timeStamps: 454545, callDuration: 3545, userId: 1,
//     });
//     expect(Number.isInteger(callogId)).toBeTruthy();
//   });
// });

