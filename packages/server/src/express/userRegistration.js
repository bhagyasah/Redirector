import addUser from '../api/addUser';

export default async (req, res) => {
  console.log('value in registration user function', req.query);
  const response = await addUser(req.query);
  console.log(response);
};

