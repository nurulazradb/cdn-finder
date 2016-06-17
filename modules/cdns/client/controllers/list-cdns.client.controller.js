(function () {
  'use strict';

  angular
    .module('cdns')
    .controller('CdnsListController', CdnsListController);

  CdnsListController.$inject = ['$scope', 'CdnsService'];

  function CdnsListController($scope, CdnsService) {
    var vm = this;

    vm.cdns = CdnsService.query();

    $scope.filterOptions = {
      types: [
        { name: 'Show All' },
        { name: 'JavaScript' },
        { name: 'StyleSheet' }
      ]
    }

    $scope.filterItem = {
      type: $scope.filterOptions.types[0]
    }

    $scope.customFilter = function(data) {
      if (data.type === $scope.filterItem.type.name) {
        return true;
      } else if ($scope.filterItem.type.name === 'Show All') {
        return true;
      } else {
        return false;
      }
    }
  }
}());
