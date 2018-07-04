import db from './../db';

export default async function addContact(record) {
  const res = db.execute(async ({ insert }) => {
    const contactId = await insert('Contacts', record);
    return contactId;
  });
  return res;
}

