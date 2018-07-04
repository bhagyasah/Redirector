import db from '../db';

export default async function addUser(record) {
  const res = await db.execute(async ({ insert, findOne }) => {
    const preRecord = await findOne('User', { regToken: record.regToken });
    if (preRecord) {
      // console.log('already register');
      return 'already register';
    }
    // console.log('register successfully');
    const userId = await insert('User', record);
    return userId;
  });
  return res;
}

