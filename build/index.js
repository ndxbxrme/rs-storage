(function() {
  var moduleName;

  moduleName = 'rs-storage';

  module.exports = function(appName) {
    var angular;
    angular = window.angular || require('angular');
    angular.module('rs-storage', []).factory('storage', function() {
      return {
        get: function(key) {
          var val;
          val = localStorage.getItem(appName + ':' + key);
          if (val) {
            return JSON.parse(val);
          }
          return null;
        },
        set: function(key, value) {
          return localStorage.setItem(appName + ':' + key, JSON.stringify(value));
        }
      };
    });
    return moduleName;
  };

}).call(this);

//# sourceMappingURL=index.js.map
