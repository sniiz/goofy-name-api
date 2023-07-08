import * as fs from "fs";

// read and sort prefixes.json and suffixes.json
const prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
const suffixes = JSON.parse(fs.readFileSync("./suffixes.json", "utf8"));

// sort prefixes and suffixes
prefixes.sort();
suffixes.sort();

// overwrite prefixes.json and suffixes.json
fs.writeFileSync("./prefixes.json", JSON.stringify(prefixes, null, 2));
fs.writeFileSync("./suffixes.json", JSON.stringify(suffixes, null, 2));
