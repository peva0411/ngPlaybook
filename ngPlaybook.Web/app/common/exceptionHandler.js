(function() {
    'use strict';

    angular
        .module('common')
        .config(config);

    config.$inject = ['$provide'];

    function config($provide) {
        $provide.decorator("$exceptionHandler", function($delegate, $injector) {
            return function (exception, cause) {

                $delegate(exception, cause);

                var alerting = $injector.get("alerting");

                alerting.addDanger(exception.message);
            };
        });
    }

})();
