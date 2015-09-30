/* jshint node: true */
'use strict';

var utils = require('semver-utils');

/**
 * Accepts a `version` in the format of *git-repo-version* and parses
 * it using the *semver-utils* package.
 *
 * @param {String} version - something like "1.5.0-beta.1+pre.a1b2c3d4"
 * @return {Object} - see https://github.com/coolaj86/semver-utils
 */
module.exports = function(version) {
  var parts = utils.parse(String(version)) || {};

  // TODO: use *semver-utils* directly and remove this file...
  // for now, keep this for backwards compatibility.
  parts.commit = parts.build;

  return parts;
};
