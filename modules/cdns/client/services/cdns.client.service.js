(function () {
  'use strict';

  angular
    .module('cdns.services')
    .factory('CdnsService', CdnsService);

  CdnsService.$inject = ['$resource'];

  function CdnsService($resource) {
    return $resource('api/cdns/:cdnId', {
      cdnId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
}());
