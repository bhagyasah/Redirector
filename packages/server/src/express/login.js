import login from './../auth/login';

export default async (req, res) => {
  const { userId } = req.query;
  const status = await login(userId);
  res.send(JSON.stringify(status));
};

