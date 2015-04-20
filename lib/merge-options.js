/* jshint node: true */
'use strict';

/**
 * Merge application or parentAddon options with our defaults.
 *
 * @param {Object} target - Ember app or parentAddon
 * @return {Object}
 */
module.exports = function(target) {
  var defaultOptions = {
    metaTemplate: false, // 'VERSION: {VERSION} SHA: {COMMIT}',
  };

  var options = (target.options && target.options.buildInfoOptions) || {};

  // merge options
  for (var option in defaultOptions) {
    if (!options.hasOwnProperty(option)) {
      options[option] = defaultOptions[option];
    }
  }

  return options;
};
