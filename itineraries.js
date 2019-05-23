const faker = require('faker');
faker.locale = "en_IE";

const MS_DAY = 1000 * 60 * 60 * 24;

function itinerary() {
  let departureDate = getDepartureDate();
  return {
    origin: faker.airport.iataCode(),
    dest: faker.airport.iataCode(),
    depDate: departureDate,
    rtnDate: getReturnDate(departureDate)
  };
}

function randomDate(start, end, startHour, endHour) {
  var date = new Date(+start + Math.random() * (end - start));
  var hour = startHour + Math.random() * (endHour - startHour) | 0;
  date.setHours(hour);
  date.setSeconds(0);
  date.setMilliseconds(0);
  return date;
}

function getDepartureDate() {
  let now = Date.now();
  return randomDate(now + MS_DAY * 3, now + MS_DAY * 330, 6, 24);
}

function getReturnDate(depDate) {
  let duration = faker.random.arrayElement([0, 0, 0, 0, 0, 1, 1, 2, 3, 4, 5, 6, 7, 7, 7 ,8, 9, 10, 11, 12, 13, 14, 14, 21, 30]);
  //  let duration = faker.random.arrayElement([0]);
  let rtnDate = new Date(depDate.getTime() + duration * MS_DAY);
  let startHour = 6;
  if(duration === 0) {
    startHour = depDate.getHours() + 6;
  } 
  rtnDate.setHours(startHour + Math.random() * (24 - startHour) | 0);
  rtnDate.setMinutes(Math.random() * 60);
  return rtnDate;
}

const Airport = require('./airport');
faker.airport = new Airport(faker);

itineraries = [];

for(let i = 0; i < process.argv[2]; i++) {
  itineraries.push(itinerary());
}

console.log(itineraries);

