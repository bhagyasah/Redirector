import path from 'path';
import sqlite from 'sqlite';
import Promise from 'bluebird';

export const dbPromise = sqlite.open('redirector.sqlite', { Promise });


let dbInstance = null;
async function getInstance() {
  if (dbInstance !== null) {
    return dbInstance;
  }

  const db = await dbPromise;
  await db.migrate({ migrationsPath: path.resolve(__dirname, 'migrations') });
  dbInstance = {};
  return dbInstance;
}

export async function init() {
  await getInstance();
}

export default {
  execute: async (func) => {
    const db = await getInstance();

    const res = await func(db);

    return res;
  },
};
