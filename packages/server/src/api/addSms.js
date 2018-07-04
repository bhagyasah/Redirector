import db from './../db';


export default async function addSms(record) {
  const res = db.execute(async ({ insert }) => {
    const smsId = await insert('Sms', record);
    return smsId;
  });
  return res;
}
