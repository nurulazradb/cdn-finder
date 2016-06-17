(function () {
  'use strict';

  angular
    .module('cdns.routes')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    $stateProvider
      .state('cdns', {
        abstract: true,
        url: '/cdns',
        template: '<ui-view/>'
      })
      .state('cdns.list', {
        url: '',
        templateUrl: 'modules/cdns/client/views/list-cdns.client.view.html',
        controller: 'CdnsListController',
        controllerAs: 'vm',
        data: {
          pageTitle: 'CDNs List'
        }
      })
      .state('cdns.create', {
        url: '/create',
        templateUrl: 'modules/cdns/client/views/form-cdn.client.view.html',
        controller: 'CdnsController',
        controllerAs: 'vm',
        resolve: {
          cdnResolve: newCdn
        },
        data: {
          roles: ['user', 'admin'],
          pageTitle: 'CDNs Create'
        }
      })
      .state('cdns.edit', {
        url: '/:cdnId/edit',
        templateUrl: 'modules/cdns/client/views/form-cdn.client.view.html',
        controller: 'CdnsController',
        controllerAs: 'vm',
        resolve: {
          cdnResolve: getCdn
        },
        data: {
          roles: ['user', 'admin'],
          pageTitle: 'Edit CDN {{ cdnResolve.name }}'
        }
      })
      .state('cdns.view', {
        url: '/:cdnId',
        templateUrl: 'modules/cdns/client/views/view-cdn.client.view.html',
        controller: 'CdnsController',
        controllerAs: 'vm',
        resolve: {
          cdnResolve: getCdn
        },
        data: {
          pageTitle: 'CDN {{ cdnResolve.name }}'
        }
      });
  }

  getCdn.$inject = ['$stateParams', 'CdnsService'];

  function getCdn($stateParams, CdnsService) {
    return CdnsService.get({
      cdnId: $stateParams.cdnId
    }).$promise;
  }

  newCdn.$inject = ['CdnsService'];

  function newCdn(CdnsService) {
    return new CdnsService();
  }
}());
