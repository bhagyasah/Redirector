import db from '../db';

export default async function findOutbox(condition) {
  const res = await db.execute(async ({ find }) => {
    const rec = await find('outbox', condition);
    return rec;
  });
  return res;
}
