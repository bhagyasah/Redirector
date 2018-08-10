import db from '../db';

export default async function addCallLog(record) {
  const res = db.execute(async ({ insert, findOne }) => {
    const rec = await findOne('CalLogs', { callLogId: record.callLogId });
    if (rec === undefined) {
      const id = await insert('CalLogs', record);
      return id;
    }
    return 'repeated data found';
  });
  return res;
}
