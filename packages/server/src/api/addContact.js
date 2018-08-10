import db from './../db';

export default async function addContact(record) {
  const res = db.execute(async ({ insert, findOne }) => {
    const rec = await findOne('Contacts', { contactId: record.contactId });
    console.log('data in add contact', rec, record.contactId);
    if (rec === undefined) {
      const contactId = await insert('Contacts', record);
      console.log('new contact inserted', record.contactName);
      return contactId;
    }
    return 'repeated data found';
  });
  return res;
}

