import db from '../db';

export default async function findGPSLocation(condition) {
  const res = await db.execute(async ({ find }) => {
    const rec = await find('GPSLocation', condition);
    return rec;
  });
  return res;
}

