/* jshint node: true */
'use strict';

var parseVersion = require('./lib/parse-version');
var mergeOptions = require('./lib/merge-options');
var buildMetaTag = require('./lib/build-meta-tag');

module.exports = {
  name: 'ember-cli-build-info',

  /**
   * Store Application options, merged with defaults.
   */
  included: function(app, parentAddon) {
    var target = (parentAddon || app);
    this.options = mergeOptions(target);
  },

  /**
   * Expose the build info on the APP object.
   */
  config: function(env, config) {
    config.APP.buildInfo = parseVersion(config.APP.version || require('git-repo-version')());
  },

  /**
   * Inject a <meta> tag with the build info as the content.
   */
  contentFor: function(type, config) {
    if (type === 'head') {
      return buildMetaTag(config.APP.buildInfo, this.options.metaTemplate);
    }
  }
};
