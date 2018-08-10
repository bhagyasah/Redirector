import db from '../db';

export default async function findInbox(condition) {
  const res = await db.execute(async ({ find }) => {
    const rec = await find('inbox', condition);
    return rec;
  });
  return res;
}
