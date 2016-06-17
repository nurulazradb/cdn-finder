(function (app) {
  'use strict';

  app.registerModule('cdns', ['core']);// The core module is required for special route handling; see /core/client/config/core.client.routes
  app.registerModule('cdns.services');
  app.registerModule('cdns.routes', ['ui.router', 'core.routes', 'cdns.services']);
}(ApplicationConfiguration));
