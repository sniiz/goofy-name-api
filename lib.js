// THAT'S IT I'VE HAD ENOUGH OF BEING CALLED A BAD PROGRAMMER
// STARTING NOW, EVERYTHING I EVER MAKE, NO MATTER HOW SILLY AND/OR INSIGNIFICANT, SHALL BE FULLY MODULARIZED
// AND DOCUMENTED
// I'LL SHOW THEM
// I'LL SHOW THEM ALL

import * as fs from "fs";

const PARENT = "."; // i don't know how to do relative imports
// TODO figure out how to do relative imports

const dictionary = JSON.parse(
  fs.readFileSync(`${PARENT}/dictionary.json`, "utf8")
);
const prefixes = dictionary.prefixes;
const suffixes = dictionary.suffixes;

/**
 * generate n random names
 * @param {number} n - number of names to generate
 * @param {boolean} capitalize - capitalize the first letter of each name
 * @returns {string[]} - array of generated names
 */
function generateNames(n, capitalize = false) {
  return Array.from({ length: n }, () => {
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    return capitalize
      ? `${prefix.charAt(0).toUpperCase()}${prefix.slice(1)}${suffix}`
      : `${prefix}${suffix}`;
  });
}

export { generateNames };
