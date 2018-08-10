import express from 'express';
import http from 'http';
import run from 'app-node';
import bodyParser from 'body-parser';
import socketHandler from './socket';
import authExpress from './express';
import { init as dbinit } from './db';

const port = process.env.PORT || 4000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const server = http.createServer(app);

run(async () => {
  await dbinit();
  authExpress(app);
  console.log(`server started at port ${port}`);
  server.listen(port);
  socketHandler(server);
  // setup route
});

