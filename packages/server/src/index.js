import express from 'express';
import http from 'http';
import run from 'app-node';
import authExpress from './express';
import { init as dbinit } from './db';

const port = process.env.PORT || 4000;

const app = express();
const server = http.createServer(app);

run(async () => {
  await dbinit();
  console.log(`server started at port ${port}`);
  server.listen(port);
  // setup route
  authExpress(app);
});

