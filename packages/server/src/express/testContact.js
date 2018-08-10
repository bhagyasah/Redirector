

export default async (req, res) => {
  try {
    // const record = req.body;
    console.log('send contact method called');
    const status = [{ contact_name: 'bhagya', mobile_no: '98048348' }, { contact_name: 'bhagya', mobile_no: '98048348' }, { contact_name: 'bhagya', mobile_no: '98048348' }];
    res.send(status);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

