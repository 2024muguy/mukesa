const { Timestamp } = require("mongodb");
const { getTimestamp, parseDate } = require("./dateTimeUtility.js");

// Use the getTimestamp function
const timestamp = getTimestamp();
console.log(timestamp);

// Use the parseDate function
const date = parseDate(8); //Outputs "08"
console.log(date);

module.exports = Timestamp; // Export Timestamp using CommonJS syntax
