import db from '../db';

export default async function findContact(condition) {
  const res = await db.execute(async ({ find }) => {
    const rec = await find('Contacts', condition);
    return rec;
  });
  return res;
}
