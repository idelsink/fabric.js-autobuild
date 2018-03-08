/**
 * Replace the package name with any other name
 */

const input = process.argv[2];
const name =  process.argv[3]
const output = process.argv[4] || process.argv[2];

// The JSON file
const o = require(input);

o.name = name;

require("fs").writeFileSync(output, JSON.stringify(o, null, 2));
