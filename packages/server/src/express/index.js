import login from './login';

export default function (app) {
  app.get('/auth/login', login);
}
