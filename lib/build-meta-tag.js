/* jshint node: true */
'use strict';

/**
 * Format a meta tag for injection into the <head> tag.
 *
 * `template` can contain `{VERSION}` and `{COMMIT}` keys that will be
 * replaced with data from `buildInfo`.
 *
 * @param {Object} buildInfo - { version: 'X.Y.Z', commit: '123456'}
 * @param {String} template - template for the meta tag content.
 * @return {String}
 */
module.exports = function(buildInfo, template) {
  // abort meta tag injection if there's no template
  if (!template) { return ''; }

  var output = template
    .replace(/\{VERSION\}/gi, buildInfo.version)
    .replace(/\{COMMIT\}/gi, buildInfo.commit);

  return '<meta name="build-info" content="' + output + '"/>';
};
