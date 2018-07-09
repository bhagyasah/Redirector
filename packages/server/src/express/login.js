import login from './../auth/login';

export default async (req, res) => {
  console.log('login function called', req);
  res.send("hlw andrid i get you");
  const { userId } = req.query;
  const status = await login(userId);
  res.send(JSON.stringify(status));
};

