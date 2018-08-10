import db from '../db';

export default async function addUser(record) {
  const res = await db.execute(async ({ insert, findOne }) => {
    const preRecord = await findOne('User', { id: record.id });
    if (preRecord) {
      // console.log('already register');
      return 'already_register';
    }
    return 'not_register';
  });
  return res;
}

