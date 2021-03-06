(function(app) {

    app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
    });

    app.run(function () {});

    app.controller('AppController', function ($scope) {

    });

}(angular.module("HarViewer", [
    'HarViewer.home',
    'HarViewer.about',
    'templates-app',
    'templates-common',
    'ui.router.state',
    'ui.router',
    'angularFileUpload',
    'ui.grid',
    'ui.grid.resizeColumns',
    'ui.grid.selection',
    'ui.grid.autoResize',
    'ui.grid.exporter',
    'ui.bootstrap'
])));
