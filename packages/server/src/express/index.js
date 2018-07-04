import login from './login';
import userRegistration from './userRegistration';

export default function (app) {
  app.get('/auth/login', login);
  app.get('/auth/registration', userRegistration);
}

