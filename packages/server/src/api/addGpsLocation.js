import db from './../db';

export default async function addGpsLocation(record) {
  const res = await db.execute(async ({ insert }) => {
    const gpsId = await insert('GPSLocation', record);
    return gpsId;
  });
  return res;
}
