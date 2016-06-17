(function () {
  'use strict';

  angular
    .module('cdns')
    .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  function menuConfig(menuService) {
    menuService.addMenuItem('topbar', {
      title: 'CDNs',
      state: 'cdns',
      type: 'dropdown',
      roles: ['*']
    });

    // Add the dropdown list item
    menuService.addSubMenuItem('topbar', 'cdns', {
      title: 'List Libraries',
      state: 'cdns.list'
    });

    // Add the dropdown create item
    menuService.addSubMenuItem('topbar', 'cdns', {
      title: 'Add Library',
      state: 'cdns.create',
      roles: ['user']
    });
  }
}());
