import db from '../db';

export default async function addCallLog(record) {
  const res = db.execute(async ({ insert }) => {
    const id = await insert('CalLogs', record);
    return id;
  });
  return res;
}
