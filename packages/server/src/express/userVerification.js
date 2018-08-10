import verifyUser from '../api/verifyUser';

export default async (req, res) => {
  console.log('value in registration user function', req.body);
  const response = await verifyUser(req.body);
  console.log(response);
  res.send(response);
};

