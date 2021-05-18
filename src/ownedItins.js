const faker = require('faker');
faker.locale = "en_IE";
const itinerary = require('./itinerary');
const profile = require('./profile');

let profiles = [];
let itineraries = [];

for(let i = 0; i < process.argv[2]; i++) {
  profiles.push(profile());
}

for(let i = 0; i < process.argv[3]; i++) {
  let profile = faker.random.arrayElement(profiles);
  itineraries.push(itinerary({
    name: profile.name,
    email: profile.email,
  }));
}

console.log(JSON.stringify(profiles, null, 2));
console.log(JSON.stringify(itineraries, null, 2));
