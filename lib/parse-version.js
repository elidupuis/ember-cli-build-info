/* jshint node: true */
'use strict';

/**
 * Accepts a `version` in the format of *git-repo-version* and splits
 * up the semver and appended commit SHA.
 *
 * @param {String} version - something like "1.5.0-beta.1+pre.a1b2c3d4"
 * @return {Object}
 */
module.exports = function(version) {
  var parts = String(version).match(/(.+)\+(\w+)$/);

  if(
    parts === null ||
    parts.length !== 3
  ) {
    // tagged commit
    return {
      version: version,
      commit: '',
      desc: version
    }
  }
  else {
    return {
      version: parts[1],
      commit: parts[2],
      desc: parts[1] + '+' + parts[2] 
    };
  }
};
