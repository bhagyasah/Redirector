
import login from './login';
import userVerification from './userVerification';
import userRegistration from './userRegistration';
import testContact from './testContact';


export default function (app) {

  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.post('/auth/login', login);
  app.post('/auth/verification', userVerification);
  app.post('/auth/useregistration', userRegistration);
  app.post('/getContact', testContact);
}

