import uuid from 'uuid';
import db from '../db';
import cache from './../cache';

const SESSION_AGE = 7 * 86400 * 1000; // session duration of one week
export default async function login(record) {
  // console.log('auth login called', record);
  const res = await db.execute(async ({ findOne }) => {
    const rec = await findOne('User', { id: record.id });
    // console.log('record to be found', rec);
    if (!rec) {
      const REG_TOKEN = uuid();
      console.log('REG_TOKEN', REG_TOKEN);
      const response = { REG_TOKEN, status: 'not_register' };
      return response;
    }
    const token = record.accessToken;
    const user = {
      token,
      id: record.id,
      name: rec.name,
      picture: rec.image,
      mobileNo: rec.mobileNo,
      email: rec.email,
      regToken: rec.regToken,
      status: 'already_register',
    };
    // console.log('data in user object', user);
    cache.users.set(token, user, SESSION_AGE);
    // console.log('user value to be return', cache.users);
    return user;
  });
  return res;
}
