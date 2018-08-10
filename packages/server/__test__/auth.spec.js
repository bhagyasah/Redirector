// import express from 'express';
// import http from 'http';
// import axios from 'axios';
// import appExpress from '../src/express';

// const app = express();
// const server = http.createServer(app);
// appExpress(app);
// const port = 5001;
// server.listen(port);

// describe('it checks the server for authentincation and registration', () => {
//   it('checks for valid login', async () => {
//     const res = await axios.get(`http://localhost:${port}/auth/login?userId=1234`);
//     //  console.log('response data', res.data);
//     expect(res.data).toMatchObject({ userName: 'bhagya' });
//   });

//   it('checks for registration', async () => {
//     const res = await axios.get(`http://localhost:${port}/auth/registration?regToken=126789&userName=bhagya&gender=male&email=bhagysah@yahoo.com`);
//     console.log('response data', res.data);
//     expect(Number.isInteger(res.data)).toBeTruthy();
//   });
// });
