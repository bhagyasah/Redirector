import db from '../db';

export default async function addWWBoardMessage(record) {
  const res = db.execute(async ({ insert }) => {
    const id = await insert('WWBoard', record);
    return id;
  });
  return res;
}
