import db from '../db';

export default async function addUser(record) {
  console.log('value in adduser',record);
  const res = await db.execute(async ({ insert, findOne }) => {
    const preRecord = await findOne('User', { id: record.id });
    if (preRecord) {
      // console.log('already register');
      return 'already_register';
    }
    console.log('register successfully');
    const userId = await insert('User',record);
    console.log("respose to be sent after insertion",userId);
    return 'Succesfully_Register' ;
  });
  return res;
}

