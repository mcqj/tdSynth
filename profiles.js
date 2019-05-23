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

profiles = [];

for(let i = 0; i < process.argv[2]; i++) {
  profiles.push(profile());
}

console.log(profiles);
