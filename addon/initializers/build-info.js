import Ember from 'ember';

export var initialize = function(container, application) {
  var version = Ember.Object.create(application.buildInfo);
  var key = 'buildInfo';

  application.register('buildInfo:main', version, { instantiate: false, singleton: true });
  application.inject('route', key, 'buildInfo:main');
  application.inject('controller', key, 'buildInfo:main');
  application.inject('service', key, 'buildInfo:main');
};

export default {
  name: 'buildInfo',

  initialize: initialize
};
