import db from '../db';

export default async function login(id) {
  const res = await db.execute(async ({ findOne }) => {
    const rec = await findOne('User', { regToken: id });
    if (rec) {
      return rec;
    }
    return 'invalid login';
  });
  return res;
}
