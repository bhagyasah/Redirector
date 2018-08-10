import addUser from '../api/addUser';

export default async (req, res) => {
  console.log('value in registration user function', req.body);
  const response = await addUser(req.body);
  console.log(response);
  res.send(response);
};

