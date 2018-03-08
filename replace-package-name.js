/**
 * Replace the package name with any other name
 */
const resolve = require('path').resolve
const input = process.argv[2];
const name =  process.argv[3]
const output = process.argv[4] || process.argv[2];

// The JSON file
const o = require(resolve(input));

o.name = name;

require("fs").writeFileSync(resolve(output), JSON.stringify(o, null, 2));
