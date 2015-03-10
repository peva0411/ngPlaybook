(function() {
    'use strict';
    angular.module('common').directive('alerts', alerts);

    alerts.$inject = ['alerting'];

    function alerts(alerting) {
        return {
            restrict: "AE",
            templateUrl: "/app/common/alerts.html",
            scope: true,
            controller: function($scope) {
                $scope.removeAlert = function(alert) {
                    alerting.removeAlert(alert);
                };
            },
            link: function(scope) {
                scope.currentAlerts = alerting.currentAlerts;
            }
        };
    }

})();
