import db from '../db';

export default async function findSms(condition) {
  const res = await db.execute(async ({ find }) => {
    const rec = await find('Sms', condition);
    return rec;
  });
  return res;
}
