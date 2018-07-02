
export default (req, res) => {
  const { username, password } = req.query;
  res.send('login success');
  console.log('usernmae = ', username, 'password=', password);
}
