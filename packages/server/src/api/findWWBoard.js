import db from '../db';

export default async function findWWBoard(condition) {
  const res = await db.execute(async ({ find }) => {
    const rec = await find('WWBoard', condition);
    // console.log('WWBoard message tobe  send', rec);
    return rec;
  });
  return res;
}
