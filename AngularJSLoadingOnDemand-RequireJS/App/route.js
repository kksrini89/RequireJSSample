(function () {
    define(['application', 'App/Customer/Controllers/CustomerController', 'App/Retailer/Controllers/RetailerController'], function (app) {
        app.config(['$stateProvider', '$urlRouterProvider', '$translateProvider', '$translatePartialLoaderProvider', function ($stateProvider, $urlRouterProvider, $translateProvider, $translatePartialLoaderProvider) {
            //$urlRouterProvider.otherwise('/404');

            $stateProvider.state('Customer', {
                url: '/Customer',
                templateUrl: 'App/Customer/Partials/Customer.html',
                controller: 'CustomerController'
            });

            $stateProvider.state('Retailer', {
                url: '/Retailer',
                templateUrl: 'App/Retailer/Partials/Retailer.html',
                controller: 'RetailerController'
            });

            $translatePartialLoaderProvider.addPart('Main');
            $translateProvider.useLoader('$translatePartialLoader', {
                urlTemplate: "Scripts/Locales/{part}/{lang}.json"
            });
            $translateProvider.preferredLanguage('en_US');
            //$translateProvider.use('en_US');
        }]);
        app.run(function ($rootScope, $translate) {
            $rootScope.$on('$translatePartialLoaderStructureChanged', function () {
                $translate.refresh();
            });
        });
        app.controller('MultilingualController', ['$scope', '$translate', function ($scope, $translate) {
            $scope.clickHandler = function (key) {
                // $translatePartialLoader.addPart('ImageReview',1);
                $translate.use(key);
            };
        }]);
    });
})();