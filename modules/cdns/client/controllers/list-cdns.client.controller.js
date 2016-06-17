(function () {
  'use strict';

  angular
    .module('cdns')
    .controller('CdnsListController', CdnsListController);

  CdnsListController.$inject = ['CdnsService'];

  function CdnsListController(CdnsService) {
    var vm = this;

    vm.cdns = CdnsService.query();
  }
}());
