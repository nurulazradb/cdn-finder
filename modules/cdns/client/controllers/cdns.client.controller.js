(function () {
  'use strict';

  angular
    .module('cdns')
    .controller('CdnsController', CdnsController);

  CdnsController.$inject = ['$scope', '$state', 'cdnResolve', '$window', 'Authentication'];

  function CdnsController($scope, $state, cdn, $window, Authentication) {
    var vm = this;

    vm.cdn = cdn;
    vm.authentication = Authentication;
    vm.error = null;
    vm.form = {};
    vm.remove = remove;
    vm.save = save;

    // Remove existing Cdn
    function remove() {
      if ($window.confirm('Are you sure you want to delete?')) {
        vm.cdn.$remove($state.go('cdns.list'));
      }
    }

    // Save Cdn
    function save(isValid) {
      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'vm.form.cdnForm');
        return false;
      }

      // TODO: move create/update logic to service
      if (vm.cdn._id) {
        vm.cdn.$update(successCallback, errorCallback);
      } else {
        vm.cdn.$save(successCallback, errorCallback);
      }

      function successCallback(res) {
        $state.go('cdns.view', {
          cdnId: res._id
        });
      }

      function errorCallback(res) {
        vm.error = res.data.message;
      }
    }
  }
}());
