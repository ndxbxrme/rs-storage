moduleName = 'rs-storage'
module.exports = (appName) ->
  angular = window.angular or require 'angular'
  angular.module 'rs-storage', []
  .factory 'storage', ->
    get: (key) ->
      val = localStorage.getItem appName + ':' + key
      return JSON.parse val if val
      null
    set: (key, value) ->
      localStorage.setItem appName + ':' + key, JSON.stringify value
  moduleName