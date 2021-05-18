const faker = require('faker');
faker.locale = "en_IE";

function profile() {
  return {
    id: faker.random.uuid(),
    name: faker.name.findName(),
    email: faker.internet.email(),
    mobile: faker.phone.phoneNumber(),
  };
}

module.exports = profile;
