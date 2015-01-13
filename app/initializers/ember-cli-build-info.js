import Ember from 'ember';
import ENV from '../config/environment';

export var initialize = function(container, application) {
  var key = ENV.buildInfoKey || 'buildInfo';
  var version = Ember.Object.create(application.BUILD_INFO);

  application.register('buildInfo:main', version, { instantiate: false, singleton: true });
  application.inject('route', key, 'buildInfo:main');
  application.inject('controller', key, 'buildInfo:main');
  application.inject('service', key, 'buildInfo:main');
};

export default {
  name: 'buildInfo',

  initialize: initialize
};
