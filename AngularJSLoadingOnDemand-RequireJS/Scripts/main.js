(function () {
    requirejs.config({
        baseUrl: '/',
        paths: {
            'angular': 'Scripts/angular.min',
            'jquery': 'Scripts/jquery-1.11.3.min',
            'bootstrap': 'Scripts/bootstrap.min',
            'ui-router': 'Scripts/angular-ui-router.min',
            'angular-translate': 'Scripts/angular-translate',
            'angular-translate-partial-loader': 'Scripts/angular-translate-loader-partial.min',
            'application': 'App/app',
            'route': 'App/route'
        },
        shim: {
            'ui-router': {
                deps: ['angular']
            },
            'angular-translate': {
                deps: ['angular']
            },
            'angular-translate-partial-loader': {
                deps: ['angular-translate']
            },
            'bootstrap': {
                deps: ['jquery']
            },
            'application': {
                deps: ['angular', 'angular-translate-partial-loader', 'ui-router', 'bootstrap']
            }
        }
    });
    define(['route'], function (route) {
        require(route, function () {
            angular.bootstrap(document, ['MultilingualApp']);
        });
    });
})();