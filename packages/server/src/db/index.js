import path from 'path';
import sqlite from 'sqlite';
import Promise from 'bluebird';
import insert from './insert';
import find from './find';
import findOne from './findOne';

export const dbPromise = sqlite.open('redirector.sqlite', { Promise });

let dbInstance = null;
async function getInstance() {
  if (dbInstance !== null) {
    return dbInstance;
  }

  const db = await dbPromise;
  await db.migrate({ migrationsPath: path.resolve(__dirname, 'migrations') });
  dbInstance = {
    insert: insert.bind(null, db),
    find: find.bind(null, db),
    findOne: findOne.bind(null, db),
  };
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
