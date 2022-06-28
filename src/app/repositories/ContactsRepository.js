const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'Felipe',
    email: 'felipe@email.com',
    phone: '123123123',
    category_id: uuid(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }
}

module.exports = new ContactsRepository();
