// import space from "to-space-case";

// var clean = require("to-no-case");

function greeting(name) {
  console.log(`Hello ${name}`);
}

/**
 * Export.
 */

// module.exports = toNoCase;

/**
 * Test whether a string is camel-case.
 */

var hasSpace = /\s/;
var hasSeparator = /(_|-|\.|:)/;
var hasCamel = /([a-z][A-Z]|[A-Z][a-z])/;

/**
 * Remove any starting case from a `string`, like camel or snake, but keep
 * spaces and punctuation that may be important otherwise.
 *
 * @param {String} string
 * @return {String}
 */

function toNoCase(string) {
  if (hasSpace.test(string)) return string.toLowerCase();
  if (hasSeparator.test(string))
    return (unseparate(string) || string).toLowerCase();
  if (hasCamel.test(string)) return uncamelize(string).toLowerCase();
  return string.toLowerCase();
}

/**
 * Separator splitter.
 */

var separatorSplitter = /[\W_]+(.|$)/g;

/**
 * Un-separate a `string`.
 *
 * @param {String} string
 * @return {String}
 */

function unseparate(string) {
  return string.replace(separatorSplitter, function (m, next) {
    return next ? " " + next : "";
  });
}

/**
 * Camelcase splitter.
 */

var camelSplitter = /(.)([A-Z]+)/g;

/**
 * Un-camelcase a `string`.
 *
 * @param {String} string
 * @return {String}
 */

function uncamelize(string) {
  return string.replace(camelSplitter, function (m, previous, uppers) {
    return previous + " " + uppers.toLowerCase().split("").join(" ");
  });
}

/**
 * Export.
 */

// module.exports = toSpaceCase;

/**
 * Convert a `string` to space case.
 *
 * @param {String} string
 * @return {String}
 */

function toSpaceCase(string) {
  return toNoCase(string)
    .replace(/[\W_]+(.|$)/g, function (matches, match) {
      return match ? " " + match : "";
    })
    .trim();
}

const name1 = toSpaceCase("MiyamotoMusashi");
greeting(name1);
