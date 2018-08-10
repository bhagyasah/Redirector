import db from './../db';

export default async function addInbox(record) {
  const res = db.execute(async ({ insert, findOne }) => {
    const rec = await findOne('inbox', { smsId: record.smsId });
    if (rec === undefined) {
      const smsId = await insert('inbox', record);
      return smsId;
    }
    return 'repaeate data found';
  });
  return res;
}
