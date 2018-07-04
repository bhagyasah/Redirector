import db from '../db';

export default async function findUser(condition) {
  const res = await db.execute(async ({ find }) => {
    const rec = await find('User', condition);
    return rec;
  });
  return res;
}
