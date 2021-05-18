# tdSynth - Travel Data Synthesizer
A set of tools to create psuedo realistic travel data. This project
uses [Faker.js](https://github.com/marak/Faker.js/) to help with the
creation of fake data but adds additional features to produce data
that is specific to the Travel Domain.

## Getting Started
Clone this repository and run `npm install`.

To generate some fake itineraries, run npm start with two command line
parameters, the first being the number of fake user profiles to generate
and the second being the number of itineraries. The users assigned to each
itinerary will be selected at random. There is currently no check to avoid a
user having itineraries whose dates overlap.

Output is in JSON and is sent to standard out. Redirect to a file if you need
to persist it.

## Source Data
The source data for airports is originally in csv format and stored in the data folder.
The utilities to convert that data to `json` are located in the utils folder. To convert
airport data, execute:
```bash
npm run csvtojson data/airports.csv data/airports.json
```
That data was manually pasted into the `src/airports.js` file.
