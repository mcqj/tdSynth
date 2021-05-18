const createReadStream = require('fs').createReadStream;
const createWriteStream = require('fs').createWriteStream;
const csv = require('csvtojson');
 
const readStream = createReadStream(process.argv[2]);
const writeStream = createWriteStream(process.argv[3]);


readStream.pipe(csv( {
    colParser:  {
      "-stype": "omit",
      "-type": "omit",
      "-elevation_ft+": "omit",
      "-iso_region": "omit",
      "-municipality": "omit",
      "-gps_code": "omit",
      "-local_code": "omit",
      "-coordinates": "omit",
    },
  }))
  .pipe(writeStream);
