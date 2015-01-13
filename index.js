/* jshint node: true */
'use strict';

var execSync = require('exec-sync');

module.exports = {
  name: 'ember-cli-build-info',

  config: function(env, config) {
    var info;
    var commit;

    var defaultOptions = {
      metaTemplate: false // 'VERSION: {VERSION} SHA: {COMMIT}'
    };

    this.options = config.APP.buildInfoOptions || {};

    // merge options
    for (var option in defaultOptions) {
      if (!this.options.hasOwnProperty(option)) {
        this.options[option] = defaultOptions[option];
      }
    }

    // build info object
    info = {
      version: this.project.pkg.version || '',
      desc: execSync('git describe --tags --long --always') || null
    };

    if (typeof info.desc === 'string') {
      commit = info.desc.split('-').pop();

      // remove the prepended `g`
      if (commit[0] === 'g') {
        commit = commit.substr(1);
      }

      info.commit = commit;
    }

    // store the info
    this.info = config.APP.BUILD_INFO = info;
  },

  /**
   * Inject a <meta> tag with the build info as the content.
   */
  contentFor: function(type) {
    var info    = this.info;
    var options = this.options;
    var output;

    if (type === 'head') {
      //abort meta tag injection if there's no template
      if (!options.metaTemplate) { return; }

      output = options.metaTemplate
        .replace(/\{VERSION\}/g, info.version)
        .replace(/\{DESC\}/g, info.desc)
        .replace(/\{COMMIT\}/g, info.commit);

      return '<meta name="build-info" content="' + output + '"/>';
    }
  }
};
