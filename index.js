/* jshint node: true */
'use strict';

var execSync = require('exec-sync');

module.exports = {
  name: 'ember-cli-build-info',

  config: function(env, config) {
    var info;
    var commit;

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

    // add build info to APP config
    if (!config.APP.BUILD_INFO) {
      config.APP.BUILD_INFO = info;
    }
  },

  /**
   * Inject a <meta> tag with the build info as the content.
   * TODO: make configurable via env option `APP.buildInfoOptions`
   */
  contentFor: function(type, config) {
    var info = config.APP.BUILD_INFO;
    var template = 'VERSION: {VERSION} DESC: {DESC}';
    var output = template
      .replace(/\{VERSION\}/, info.version)
      .replace(/\{DESC\}/, info.desc)
      .replace(/\{COMMIT\}/, info.commit);

    if (type === 'head') {
      return '<meta name="build-info" content="' + output + '"/>';
    }
  }
};
