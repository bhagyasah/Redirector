import db from './../db';

export default async function addOutbox(record) {
  const res = db.execute(async ({ insert, findOne }) => {
    const rec = await findOne('outbox', { smsId: record.smsId });
    if (rec === undefined) {
      const smsId = await insert('outbox', record);
      return smsId;
    }
    return 'repeated data found';
  });
  return res;
}
