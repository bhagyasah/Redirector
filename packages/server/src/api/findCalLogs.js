import db from '../db';

export default async function findCalLogs(condition) {
  const res = await db.execute(async ({ find }) => {
    const rec = await find('CalLogs', condition);
    return rec;
  });
  return res;
}

