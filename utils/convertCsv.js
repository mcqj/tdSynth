const createReadStream = require('fs').createReadStream;
const createWriteStream = require('fs').createWriteStream;
const csvjson = require('csvjson');

const options = {
  delimiter : ',',
  quote     : '"',      // Need this if any of the fields in the CSV file are quoted
};

const toObject = csvjson.stream.toSchemaObject(options);
const stringify = csvjson.stream.stringify(2);    // Leave out the number to get compressed output

createReadStream(process.argv[2], 'utf-8')
  .pipe(toObject)
  .pipe(stringify)
  .pipe(createWriteStream(process.argv[3]));
