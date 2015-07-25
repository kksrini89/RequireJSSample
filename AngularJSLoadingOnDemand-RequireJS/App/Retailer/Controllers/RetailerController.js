(function () {
    define(['application'], function (app) {
        app.controller('RetailerController', ['$rootScope', '$translatePartialLoader', '$translate', function ($rootScope, $translatePartialLoader, $translate) {
            $translatePartialLoader.addPart('Retailer');
            var isPartAvailable = $translatePartialLoader.isPartAvailable('Main');
            if (isPartAvailable) {
                $translate('Main_RetailerHeading').then(function (translatedValue) {
                    $rootScope.PageSubTitle = translatedValue;
                    console.log($rootScope.PageSubTitle);
                });
            }
        }]);
    });
})();