(function () {
  'use strict';

  angular
    .module('cdns')
    .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  function menuConfig(menuService) {
    menuService.addMenuItem('topbar', {
      title: 'Add Library',
      state: 'cdns.create',
      roles: ['user']
    });
  }
}());
