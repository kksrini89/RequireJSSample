(function () {
    define(['application'], function (app) {
        app.controller('CustomerController', ['$rootScope', '$translatePartialLoader', '$translate', function ($rootScope, $translatePartialLoader, $translate) {
            $translatePartialLoader.addPart('Customer');
            var isPartAvailable = $translatePartialLoader.isPartAvailable('Main');
            if (isPartAvailable) {
                $translate('Main_CustomerHeading').then(function (data) {
                    $rootScope.PageSubTitle = data;
                    console.log($rootScope.PageSubTitle);
                });
            }}]);
        });
        //angular.module('MultilingualApp')
    //}]);
})();